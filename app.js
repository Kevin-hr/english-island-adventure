(function runGame() {
  "use strict";

  const STORAGE_KEY = "english-island-adventure-state";
  const levels = window.GAME_LEVELS;
  const worlds = window.GAME_WORLDS;
  const core = window.GameCore;

  const screen = document.querySelector("#screen");
  const sparkCount = document.querySelector("#spark-count");
  const soundToggle = document.querySelector("#sound-toggle");
  const homeButton = document.querySelector("#home-button");
  const parentButton = document.querySelector("#parent-button");
  const toast = document.querySelector("#toast");
  const gateDialog = document.querySelector("#parent-gate-dialog");
  const gateForm = document.querySelector("#parent-gate-form");
  const gateQuestion = document.querySelector("#gate-question");
  const gateAnswer = document.querySelector("#gate-answer");
  const gateError = document.querySelector("#gate-error");
  const parentPanelDialog = document.querySelector("#parent-panel-dialog");
  const parentReport = document.querySelector("#parent-report");
  const closeParentPanel = document.querySelector("#close-parent-panel");
  const breakDialog = document.querySelector("#break-dialog");
  const finishSessionButton = document.querySelector("#finish-session");
  const parentContinueButton = document.querySelector("#parent-continue");

  let state = loadState();
  let view = { name: "home" };
  let currentLevel = null;
  let currentMetrics = null;
  let bossStepIndex = 0;
  let answerLocked = false;
  let selectedActionItem = null;
  let forgePicked = [];
  let pendingParentAction = null;
  let gateExpectedAnswer = 12;
  let toastTimer = null;
  let sessionStartedAt = Date.now();
  let breakShown = false;
  let audioContext = null;
  let lastCompletionWasReplay = false;
  let speechRequestId = 0;
  let englishVoices = [];
  let activeAudio = null;

  function loadState() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return core.sanitizeState(raw, levels.length);
    } catch (_error) {
      return core.initialState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    syncChrome();
  }

  function syncChrome() {
    sparkCount.textContent = String(state.sparks);
    soundToggle.textContent = state.settings.sound ? "🔊" : "🔇";
    soundToggle.setAttribute("aria-label", state.settings.sound ? "关闭声音" : "打开声音");
    document.body.classList.toggle("reduce-motion", state.settings.reduceMotion);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2100);
  }

  function refreshVoices() {
    if (!("speechSynthesis" in window)) return [];
    englishVoices = window.speechSynthesis
      .getVoices()
      .filter((voice) => voice.lang.toLowerCase().startsWith("en"));
    return englishVoices;
  }

  function voiceScore(voice) {
    const name = voice.name.toLowerCase();
    let score = voice.lang.toLowerCase().startsWith("en-us") ? 25 : 10;
    if (/natural|online/.test(name)) score += 120;
    if (/aria|jenny|samantha|ava|serena|sonia/.test(name)) score += 70;
    if (/google us english/.test(name)) score += 60;
    if (/zira|david|mark/.test(name)) score += 30;
    if (voice.localService) score += 4;
    return score;
  }

  function preferredVoice() {
    const voices = refreshVoices();
    if (state.settings.voiceName) {
      const selected = voices.find((voice) => voice.name === state.settings.voiceName);
      if (selected) return selected;
    }
    return [...voices].sort((left, right) => voiceScore(right) - voiceScore(left))[0] || null;
  }

  function stopVoice() {
    speechRequestId += 1;
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }
    window.speechSynthesis?.cancel();
  }

  function speak(text, options = {}) {
    if (!state.settings.sound) return;
    const requestId = ++speechRequestId;
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }
    window.speechSynthesis?.cancel();

    const performSynthesis = () => {
      if (requestId !== speechRequestId || !state.settings.sound) return;
      if (!("speechSynthesis" in window)) return;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = options.slow ? 0.68 : 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.96;
      utterance.voice = preferredVoice();
      window.speechSynthesis.speak(utterance);
    };

    if (options.clip) {
      let fallbackStarted = false;
      const fallback = () => {
        if (fallbackStarted) return;
        fallbackStarted = true;
        activeAudio = null;
        if (refreshVoices().length) performSynthesis();
        else window.setTimeout(performSynthesis, 500);
      };
      const audio = new Audio(options.clip);
      activeAudio = audio;
      audio.preload = "auto";
      audio.playbackRate = options.slow ? 0.92 : 1;
      audio.addEventListener("error", fallback, { once: true });
      audio.addEventListener(
        "ended",
        () => {
          if (activeAudio === audio) activeAudio = null;
        },
        { once: true },
      );
      const playResult = audio.play();
      if (playResult?.catch) playResult.catch(fallback);
      return;
    }

    if (refreshVoices().length) performSynthesis();
    else window.setTimeout(performSynthesis, 500);
  }

  function playTone(success) {
    if (!state.settings.sound) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(success ? 520 : 250, audioContext.currentTime);
      if (success) {
        oscillator.frequency.exponentialRampToValueAtTime(760, audioContext.currentTime + 0.15);
      }
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.24);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.25);
    } catch (_error) {
      // The game remains fully usable when Web Audio is unavailable.
    }
  }

  function render() {
    syncChrome();
    if (view.name === "home") renderHome();
    if (view.name === "level") renderLevel();
    if (view.name === "complete") renderCompletion();
  }

  function renderHome() {
    stopVoice();
    const nextLevel = core.nextLevelNumber(state, levels.length);
    const progress = core.progressPercent(state, levels.length);
    const allComplete = state.completedLevels.length === levels.length;
    const nextLevelConfig = levels[(allComplete ? levels.length : nextLevel) - 1];
    const activeWorld = worlds.find((world) => world.id === nextLevelConfig.worldId) || worlds[0];
    const heroTitles = {
      "animal-harbor": "听英语，救伙伴，点亮灯塔",
      "school-city": "小学城正在等你报到",
      "life-town": "把英语带进每天生活",
      "idiom-island": "打开四个成语彩蛋",
    };

    screen.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(activeWorld.englishTitle)} · ${escapeHtml(activeWorld.title)}</p>
          <h1>${allComplete ? "四座学习岛全部点亮！" : heroTitles[activeWorld.id]}</h1>
          <p class="hero-lead">
            ${escapeHtml(activeWorld.description)} 已完成的动物港进度会继续保留。
          </p>
          <button class="primary-button" id="continue-button">
            ${allComplete ? "重玩最后一关" : `继续第 ${nextLevel} 关`}
          </button>
          <div class="hero-progress" aria-label="全部课程进度 ${progress}%">
            <span>${progress}%</span>
            <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
          </div>
        </div>
        <div class="harbor-scene" aria-label="${escapeHtml(activeWorld.title)}插画">
          <div class="harbor-art" aria-hidden="true">
            ${activeWorld.scene.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </div>
      </section>

      ${worlds.map(renderWorldSection).join("")}
    `;

    document.querySelector("#continue-button").addEventListener("click", () => {
      startLevel(allComplete ? levels.length : nextLevel);
    });
    screen.querySelectorAll("[data-level]").forEach((button) => {
      button.addEventListener("click", () => startLevel(Number(button.dataset.level)));
    });
  }

  function renderWorldSection(world, worldIndex) {
    const worldLevels = levels.filter((level) => level.worldId === world.id);
    const completed = worldLevels.filter((level) => state.completedLevels.includes(level.id)).length;
    return `
      <section class="map-section" data-world="${escapeHtml(world.id)}">
        <div class="section-heading">
          <div>
            <p class="eyebrow">World ${worldIndex + 1} · ${escapeHtml(world.englishTitle)}</p>
            <h2>${escapeHtml(world.title)}</h2>
          </div>
          <p>${completed}/${worldLevels.length} 完成 · ${escapeHtml(world.description)}</p>
        </div>
        <div class="level-map">
          ${worldLevels.map(renderLevelCard).join("")}
        </div>
      </section>
    `;
  }

  function renderLevelCard(level) {
    const complete = state.completedLevels.includes(level.id);
    const unlocked = core.isLevelUnlocked(state, level.number);
    const status = complete ? "✅" : unlocked ? "▶" : "🔒";
    return `
      <button
        class="level-card ${complete ? "complete" : ""} ${level.type === "boss" ? "boss" : ""}"
        data-level="${level.number}"
        ${unlocked ? "" : "disabled"}
        aria-label="第${level.number}关 ${escapeHtml(level.title)} ${complete ? "已完成" : unlocked ? "可开始" : "未解锁"}"
      >
        <span class="level-number">${level.type === "boss" ? "B" : level.number}</span>
        <span class="level-status" aria-hidden="true">${status}</span>
        <h3>${escapeHtml(level.title)}</h3>
        <p>${escapeHtml(level.skill)}</p>
      </button>
    `;
  }

  function startLevel(levelNumber) {
    if (!core.isLevelUnlocked(state, levelNumber)) {
      showToast("先完成上一关，这座码头就会亮起来");
      return;
    }
    currentLevel = levels[levelNumber - 1];
    currentMetrics = { interactions: 0, mistakes: 0, startedAt: Date.now() };
    bossStepIndex = 0;
    answerLocked = false;
    selectedActionItem = null;
    forgePicked = [];
    view = { name: "level" };
    render();
  }

  function renderLevel() {
    const level = currentLevel;
    const progress = Math.round((level.number / levels.length) * 100);
    screen.innerHTML = `
      <section class="level-shell">
        <div class="level-toolbar">
          <button class="back-button" id="level-back">← 地图</button>
          <div class="level-progress">
            <span>${level.type === "boss" ? `Boss · ${level.number}/${levels.length}` : `${level.number}/${levels.length}`}</span>
            <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
          </div>
          <button class="repeat-button" id="repeat-prompt">🔊 再听</button>
        </div>
        <article class="level-card-main">
          <header class="level-heading">
            <div class="nori" aria-hidden="true">⛵</div>
            <div>
              <p class="eyebrow">Mission ${level.number}</p>
              <h1>${escapeHtml(level.title)}</h1>
              <p>${escapeHtml(level.skill)}</p>
            </div>
          </header>
          <div class="mission-callout" id="mission-callout">
            <strong>${escapeHtml(level.prompt)}</strong>
            <small>${escapeHtml(level.instruction)}</small>
          </div>
          <div class="interaction-area" id="interaction-area"></div>
        </article>
      </section>
    `;

    document.querySelector("#level-back").addEventListener("click", goHome);
    document.querySelector("#repeat-prompt").addEventListener("click", () => {
      speak(activePrompt(), {
        slow: currentLevel.type === "echo",
        clip: activePromptAudio(),
      });
    });

    renderInteraction();
    if (currentLevel.type !== "boss") {
      const firstPrompt = activePrompt();
      const firstAudio = activePromptAudio();
      window.setTimeout(() => {
        if (view.name === "level") speak(firstPrompt, { clip: firstAudio });
      }, 320);
    }
  }

  function activePrompt() {
    if (currentLevel.type === "boss") return currentLevel.steps[bossStepIndex].prompt;
    return currentLevel.prompt;
  }

  function activePromptAudio() {
    if (currentLevel.type === "boss") return currentLevel.steps[bossStepIndex].audio;
    return currentLevel.audio;
  }

  function renderInteraction() {
    answerLocked = false;
    selectedActionItem = null;
    forgePicked = [];
    if (currentLevel.type === "boss") {
      renderBossStep();
      return;
    }
    if (["choice", "sound-match", "story"].includes(currentLevel.type)) {
      renderChoice(currentLevel, solveLevel);
    } else if (currentLevel.type === "action") {
      renderAction(currentLevel, solveLevel);
    } else if (currentLevel.type === "word-forge") {
      renderWordForge(currentLevel, solveLevel);
    } else if (currentLevel.type === "echo") {
      renderEcho(currentLevel, solveLevel);
    }
  }

  function interactionRoot() {
    return document.querySelector("#interaction-area");
  }

  function renderChoice(config, onSolved) {
    const root = interactionRoot();
    root.innerHTML = `
      <div class="choice-grid" style="--choice-count:${Math.min(config.options.length, 3)}">
        ${config.options
          .map(
            (option) => `
              <button class="choice-card" data-answer="${escapeHtml(option.id)}" style="${option.color ? `--option-color:${option.color}` : ""}" aria-label="${escapeHtml(option.label)}">
                <span class="emoji" aria-hidden="true">${option.color ? '<span class="color-key"></span>' : option.emoji}</span>
                <span class="label">${escapeHtml(option.label)}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <p class="feedback" id="feedback">先听，再选择</p>
    `;

    root.querySelectorAll(".choice-card").forEach((button) => {
      button.addEventListener("click", () => {
        if (answerLocked) return;
        if (button.dataset.answer === config.answer) {
          currentMetrics.interactions += 1;
          answerLocked = true;
          button.classList.add("hint");
          correctFeedback(config.success || "You got it!");
          window.setTimeout(onSolved, 700);
          return;
        }

        currentMetrics.mistakes += 1;
        playTone(false);
        button.classList.remove("wrong");
        void button.offsetWidth;
        button.classList.add("wrong");
        const feedback = document.querySelector("#feedback");
        feedback.textContent = currentMetrics.mistakes >= 2 ? "再听一次，发光的卡片会帮你" : "Nori 没听懂，我们再试一次";
        feedback.classList.add("hint-text");
        if (currentMetrics.mistakes >= 2) {
          root.querySelector(`[data-answer="${CSS.escape(config.answer)}"]`)?.classList.add("hint");
        }
        speak(config.prompt, { slow: true, clip: config.audio });
      });
    });
  }

  function renderAction(config, onSolved) {
    const root = interactionRoot();
    root.innerHTML = `
      <div class="action-stage">
        <div class="action-items">
          ${config.items
            .map(
              (item) => `
                <button class="drag-item" draggable="true" data-item="${item.id}">
                  <span class="emoji" aria-hidden="true">${item.emoji}</span>
                  <span class="label">${item.label}</span>
                </button>
              `,
            )
            .join("")}
        </div>
        <button class="boat-target" id="boat-target">
          <span><span class="boat" aria-hidden="true">⛵</span><small>拖到这里，或先点动物再点船</small></span>
        </button>
      </div>
      <p class="feedback" id="feedback">Put the dog on the boat.</p>
    `;

    const items = root.querySelectorAll(".drag-item");
    const boat = root.querySelector("#boat-target");
    items.forEach((item) => {
      item.addEventListener("click", () => selectActionItem(item.dataset.item));
      item.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", item.dataset.item);
        selectActionItem(item.dataset.item);
      });
    });
    boat.addEventListener("dragover", (event) => {
      event.preventDefault();
      boat.classList.add("drag-over");
    });
    boat.addEventListener("dragleave", () => boat.classList.remove("drag-over"));
    boat.addEventListener("drop", (event) => {
      event.preventDefault();
      boat.classList.remove("drag-over");
      evaluateAction(event.dataTransfer.getData("text/plain"), config, onSolved);
    });
    boat.addEventListener("click", () => {
      if (!selectedActionItem) {
        showToast("先选一只动物，再点小船");
        return;
      }
      evaluateAction(selectedActionItem, config, onSolved);
    });
  }

  function selectActionItem(itemId) {
    selectedActionItem = itemId;
    interactionRoot().querySelectorAll(".drag-item").forEach((item) => {
      item.classList.toggle("selected", item.dataset.item === itemId);
    });
    const item = currentLevel.items.find((candidate) => candidate.id === itemId);
    const label = item?.label || itemId;
    speak(label, { clip: item?.audio });
  }

  function evaluateAction(itemId, config, onSolved) {
    if (answerLocked) return;
    if (itemId === config.answer) {
      currentMetrics.interactions += 1;
      answerLocked = true;
      correctFeedback(config.success);
      interactionRoot().querySelector("#boat-target .boat").textContent = "⛵🐶";
      window.setTimeout(onSolved, 800);
      return;
    }
    currentMetrics.mistakes += 1;
    playTone(false);
    selectedActionItem = null;
    interactionRoot().querySelectorAll(".drag-item").forEach((item) => item.classList.remove("selected"));
    const feedback = document.querySelector("#feedback");
    feedback.textContent = currentMetrics.mistakes >= 2 ? "找一找 dog 🐶" : "这位伙伴还没准备好，再听一次";
    feedback.classList.add("hint-text");
    if (currentMetrics.mistakes >= 2) {
      interactionRoot().querySelector('[data-item="dog"]')?.classList.add("hint");
    }
    speak(config.prompt, { slow: true, clip: config.audio });
  }

  function renderWordForge(config, onSolved) {
    const answer = config.answer;
    const letters = config.letters;
    const root = interactionRoot();
    root.innerHTML = `
      <div class="forge-board">
        <div class="word-slots" id="word-slots">
          ${answer.split("").map(() => '<span class="word-slot"></span>').join("")}
        </div>
        <div class="letter-bank">
          ${letters.map((letter, index) => `<button class="letter-tile" data-letter="${letter}" data-index="${index}">${letter}</button>`).join("")}
        </div>
        <button class="forge-reset" id="forge-reset">重新排列</button>
      </div>
      <p class="feedback" id="feedback">听一听，再按顺序点字母</p>
    `;

    root.querySelectorAll(".letter-tile").forEach((button) => {
      button.addEventListener("click", () => {
        if (answerLocked || button.disabled) return;
        forgePicked.push({ letter: button.dataset.letter, index: button.dataset.index });
        button.disabled = true;
        speak(button.dataset.letter, {
          slow: true,
          clip: `audio/letter-${button.dataset.letter.toLowerCase()}.mp3`,
        });
        updateForgeSlots();
        if (forgePicked.length === answer.length) evaluateForge(config, onSolved);
      });
    });
    root.querySelector("#forge-reset").addEventListener("click", resetForge);
  }

  function updateForgeSlots() {
    interactionRoot().querySelectorAll(".word-slot").forEach((slot, index) => {
      slot.textContent = forgePicked[index]?.letter || "";
    });
  }

  function resetForge() {
    forgePicked = [];
    answerLocked = false;
    interactionRoot().querySelectorAll(".letter-tile").forEach((button) => {
      button.disabled = false;
    });
    updateForgeSlots();
  }

  function evaluateForge(config, onSolved) {
    const built = forgePicked.map((item) => item.letter).join("");
    if (built === config.answer) {
      currentMetrics.interactions += 1;
      answerLocked = true;
      correctFeedback(config.success || `${config.answer}!`);
      window.setTimeout(onSolved, 850);
      return;
    }
    currentMetrics.mistakes += 1;
    answerLocked = true;
    playTone(false);
    const feedback = document.querySelector("#feedback");
    feedback.textContent = `再听顺序：${config.answer.split("").join(" · ")}`;
    feedback.classList.add("hint-text");
    speak(config.prompt, { slow: true, clip: config.audio });
    window.setTimeout(resetForge, 950);
  }

  function renderEcho(config, onSolved) {
    const root = interactionRoot();
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const canUseMicrophone = Boolean(
      state.settings.speechEnabled &&
        (Recognition || navigator.mediaDevices?.getUserMedia),
    );
    root.innerHTML = `
      <div class="echo-stage">
        <div class="echo-visual" aria-hidden="true">🌉</div>
        <div class="echo-actions">
          <button class="echo-button" id="listen-echo">🔊 听慢速示范</button>
          ${
            canUseMicrophone
              ? '<button class="echo-button mic" id="start-mic">🎙️ 我来说</button>'
              : '<button class="echo-button" id="enable-mic">🎙️ 家长开启麦克风</button>'
          }
          <button class="echo-button" id="echo-fallback" disabled>🙌 我跟读了</button>
        </div>
      </div>
      <p class="feedback" id="feedback">先听示范，再大声跟读</p>
    `;

    root.querySelector("#listen-echo").addEventListener("click", () => {
      speak(config.prompt, { slow: true, clip: config.audio });
      unlockEchoFallback();
    });
    root.querySelector("#echo-fallback").addEventListener("click", () => {
      if (answerLocked) return;
      currentMetrics.interactions += 1;
      answerLocked = true;
      correctFeedback(config.success || config.prompt);
      window.setTimeout(onSolved, 750);
    });

    const micButton = root.querySelector("#start-mic");
    if (micButton) {
      micButton.addEventListener("click", () => startSpeechChallenge(config, onSolved));
    }
    const enableButton = root.querySelector("#enable-mic");
    if (enableButton) {
      enableButton.addEventListener("click", () => {
        openParentGate(() => {
          state.settings.speechEnabled = true;
          saveState();
          showToast(
            Recognition
              ? "英文识别和开口检测已开启"
              : navigator.mediaDevices?.getUserMedia
                ? "开口检测已开启：会听到声音，但不做发音评分"
                : "这个浏览器无法使用麦克风，可继续跟读",
          );
          renderEcho(config, onSolved);
        });
      });
    }
    window.setTimeout(unlockEchoFallback, 1600);
  }

  function unlockEchoFallback() {
    const button = document.querySelector("#echo-fallback");
    if (button) button.disabled = false;
  }

  async function measureVoiceActivity(durationMs = 3200) {
    if (!navigator.mediaDevices?.getUserMedia) {
      return { detected: false, unavailable: true, activeFrames: 0, peak: 0 };
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
      video: false,
    });
    let context = null;
    try {
      context = new (window.AudioContext || window.webkitAudioContext)();
      const source = context.createMediaStreamSource(stream);
      const analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.2;
      source.connect(analyser);
      if (context.state === "suspended") await context.resume();

      const buffer = new Uint8Array(analyser.fftSize);
      const samples = [];
      await new Promise((resolve) => {
        const interval = window.setInterval(() => {
          analyser.getByteTimeDomainData(buffer);
          let squared = 0;
          for (const value of buffer) {
            const normalized = (value - 128) / 128;
            squared += normalized * normalized;
          }
          samples.push(Math.sqrt(squared / buffer.length));
        }, 70);
        window.setTimeout(() => {
          window.clearInterval(interval);
          resolve();
        }, durationMs);
      });
      return core.classifyVoiceActivity(samples);
    } finally {
      stream.getTracks().forEach((track) => track.stop());
      if (context && context.state !== "closed") await context.close();
    }
  }

  async function startSpeechChallenge(config, onSolved) {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const canMeasureVoice = Boolean(navigator.mediaDevices?.getUserMedia);
    if (!Recognition && !canMeasureVoice) {
      showToast("这个浏览器无法使用麦克风，请使用跟读按钮");
      unlockEchoFallback();
      return;
    }

    stopVoice();
    const micButton = document.querySelector("#start-mic");
    const feedback = document.querySelector("#feedback");
    micButton.disabled = true;
    micButton.textContent = "🎙️ 正在听…";
    feedback.textContent = "Nori 正在认真听";

    let finished = false;
    let exactMatch = false;
    let recognition = null;

    const cleanupRecognition = () => {
      if (!recognition) return;
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      try {
        recognition.stop();
      } catch (_error) {
        // Recognition may already have ended.
      }
    };

    const succeed = (message) => {
      if (finished || answerLocked) return;
      finished = true;
      cleanupRecognition();
      currentMetrics.interactions += 1;
      answerLocked = true;
      correctFeedback(message);
      window.setTimeout(onSolved, 750);
    };

    const retry = (message) => {
      if (finished || answerLocked) return;
      finished = true;
      cleanupRecognition();
      currentMetrics.mistakes += 1;
      feedback.textContent = message;
      feedback.classList.add("hint-text");
      micButton.disabled = false;
      micButton.textContent = "🎙️ 再说一次";
      unlockEchoFallback();
    };

    if (Recognition) {
      recognition = new Recognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;

      recognition.onresult = (event) => {
        const alternatives = Array.from(event.results[0]).map((result) =>
          result.transcript.toLowerCase().replace(/[^a-z\s]/g, "").trim(),
        );
        const accepted = config.accepted || [config.prompt.toLowerCase()];
        exactMatch = alternatives.some((text) =>
          accepted.some((phrase) => text.includes(phrase)),
        );
        if (exactMatch) {
          succeed(config.success || config.prompt);
        }
      };
      recognition.onerror = () => {
        if (!canMeasureVoice) retry("麦克风没有听清，不算错；请再试一次");
      };
      try {
        recognition.start();
      } catch (_error) {
        if (!canMeasureVoice) retry("麦克风暂时不可用，请使用跟读按钮继续");
      }
    }

    if (!canMeasureVoice) return;

    try {
      const activity = await measureVoiceActivity();
      if (finished) return;
      if (activity.detected) {
        succeed(
          exactMatch
            ? config.success || config.prompt
            : "听到你开口了！跟读完成（本次不做发音评分）",
        );
      } else {
        retry("我还没听到持续的声音。靠近一点，再大声说一次");
      }
    } catch (_error) {
      if (!finished) {
        retry("麦克风权限没有打开；你可以请家长允许，或用跟读按钮继续");
      }
    }
  }

  function renderBossStep() {
    const step = currentLevel.steps[bossStepIndex];
    const callout = document.querySelector("#mission-callout");
    callout.innerHTML = `<strong>${escapeHtml(step.prompt)}</strong><small>任务 ${bossStepIndex + 1}/4 · ${escapeHtml(step.instruction)}</small>`;
    const root = interactionRoot();
    answerLocked = false;
    forgePicked = [];
    if (step.type === "choice") renderChoice(step, advanceBoss);
    if (step.type === "word-forge") renderWordForge(step, advanceBoss);
    if (step.type === "echo") renderEcho(step, advanceBoss);
    root.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="boss-progress">
        ${currentLevel.steps
          .map(
            (_item, index) =>
              `<span class="boss-dot ${index < bossStepIndex ? "done" : index === bossStepIndex ? "active" : ""}"></span>`,
          )
          .join("")}
      </div>
    `,
    );
    window.setTimeout(
      () => speak(step.prompt, { slow: step.type === "echo", clip: step.audio }),
      220,
    );
  }

  function advanceBoss() {
    bossStepIndex += 1;
    if (bossStepIndex >= currentLevel.steps.length) {
      solveLevel();
      return;
    }
    renderBossStep();
  }

  function correctFeedback(message) {
    playTone(true);
    const feedback = document.querySelector("#feedback");
    if (feedback) {
      feedback.textContent = message;
      feedback.classList.remove("hint-text");
    }
  }

  function solveLevel() {
    lastCompletionWasReplay = state.completedLevels.includes(currentLevel.id);
    state = core.completeLevel(state, currentLevel, currentMetrics);
    saveState();
    view = { name: "complete" };
    render();
  }

  function renderCompletion() {
    const isBoss = currentLevel.type === "boss";
    const isLast = currentLevel.number === levels.length;
    const world = worlds.find((item) => item.id === currentLevel.worldId) || worlds[0];
    screen.innerHTML = `
      <section class="completion">
        <div>
          <div class="completion-burst" aria-hidden="true">${isBoss ? world.scene.join("") : `✨${world.scene[1]}`}</div>
          <p class="eyebrow">Mission complete</p>
          <h1>${escapeHtml(currentLevel.completionTitle || "任务完成！")}</h1>
          <p class="english-success">${escapeHtml(currentLevel.completion)}</p>
          <div class="reward-card">${lastCompletionWasReplay ? "复习完成 · 火花已经收藏过" : "+3 声音火花"} · ${escapeHtml(currentLevel.sceneReward)}</div>
          <div class="completion-actions">
            <button class="secondary-button" id="completion-home">今天完成</button>
            <button class="primary-button" id="completion-next">
              ${isLast ? "回到总地图" : "下一关"}
            </button>
          </div>
        </div>
      </section>
    `;
    document.querySelector("#completion-home").addEventListener("click", goHome);
    document.querySelector("#completion-next").addEventListener("click", () => {
      if (isLast) goHome();
      else startLevel(currentLevel.number + 1);
    });
  }

  function goHome() {
    view = { name: "home" };
    currentLevel = null;
    currentMetrics = null;
    render();
  }

  function openParentGate(onSuccess) {
    const left = Math.floor(Math.random() * 5) + 6;
    const right = Math.floor(Math.random() * 4) + 3;
    gateExpectedAnswer = left + right;
    gateQuestion.textContent = `${left} + ${right} = ?`;
    gateAnswer.value = "";
    gateError.textContent = "";
    pendingParentAction = onSuccess;
    gateDialog.showModal();
    window.setTimeout(() => gateAnswer.focus(), 100);
  }

  function openParentPanel() {
    const summary = core.parentSummary(state, levels.length);
    const voices = refreshVoices();
    const autoVoice = preferredVoice();
    const voiceOptions = voices
      .map(
        (voice) =>
          `<option value="${escapeHtml(voice.name)}" ${state.settings.voiceName === voice.name ? "selected" : ""}>${escapeHtml(voice.name)} · ${escapeHtml(voice.lang)}</option>`,
      )
      .join("");
    parentReport.innerHTML = `
      <div class="report-grid">
        <div class="report-stat"><strong>${summary.completed}/${levels.length}</strong><span>完成关卡</span></div>
        <div class="report-stat"><strong>${summary.interactions}</strong><span>有效互动</span></div>
        <div class="report-stat"><strong>${summary.accuracy}%</strong><span>尝试正确率</span></div>
        <div class="report-stat"><strong>${state.sparks}</strong><span>声音火花</span></div>
      </div>
      <section class="parent-section">
        <h3>已经接触的词句与成语</h3>
        <div class="word-chips">
          ${summary.learnedWords.length ? summary.learnedWords.map((word) => `<span class="word-chip">${escapeHtml(word)}</span>`).join("") : '<span class="privacy-note">完成第一关后，这里会出现具体词汇。</span>'}
        </div>
      </section>
      <section class="parent-section">
        <h3>今天可以一起说</h3>
        <p><strong>${summary.completed >= 24 ? "See you tomorrow!" : summary.completed >= 16 ? "Can I have some water, please?" : summary.completed >= 8 ? "Good morning, Ms. Lee." : summary.completed >= 6 ? "I see a cat." : summary.completed >= 2 ? "Give me the red key." : "Find the cat."}</strong></p>
        <p class="privacy-note">在家里找一个对应物品，家长说英文，孩子用手指出来。30 秒就够。</p>
      </section>
      <section class="parent-section">
        <h3>设置</h3>
        <div class="settings-grid">
          <label class="setting-row">声音 <input id="setting-sound" type="checkbox" ${state.settings.sound ? "checked" : ""}></label>
          <label class="setting-row">减少动画 <input id="setting-motion" type="checkbox" ${state.settings.reduceMotion ? "checked" : ""}></label>
          <label class="setting-row">麦克风挑战 <input id="setting-speech" type="checkbox" ${state.settings.speechEnabled ? "checked" : ""}></label>
          <label class="setting-row">单次时长
            <select id="setting-time">
              ${[10, 15, 20].map((value) => `<option value="${value}" ${state.settings.timeLimitMinutes === value ? "selected" : ""}>${value} 分钟</option>`).join("")}
            </select>
          </label>
          <label class="setting-row voice-setting">系统兜底音色
            <span class="voice-controls">
              <select id="setting-voice">
                <option value="">自动选择${autoVoice ? ` · ${escapeHtml(autoVoice.name)}` : ""}</option>
                ${voiceOptions}
              </select>
              <button type="button" class="preview-voice" id="preview-voice">试听兜底</button>
            </span>
          </label>
          <div class="setting-row voice-setting">课程自然录音
            <button type="button" class="preview-voice" id="preview-course">试听课程录音</button>
          </div>
        </div>
        <p class="privacy-note">主关卡使用随产品保存的自然录音，断网也能播放。系统音色只在录音文件缺失时兜底。麦克风挑战不保存录音；浏览器无法转写英文时，只检测是否持续开口，不显示发音分数。</p>
      </section>
      <section class="parent-section">
        <h3>本地数据</h3>
        <p class="privacy-note">没有账号、广告和第三方分析。关卡进度仅保存在这台设备的浏览器中。</p>
        <button class="danger-button" id="reset-progress">清除本机进度</button>
      </section>
    `;

    parentReport.querySelector("#setting-sound").addEventListener("change", (event) => {
      state.settings.sound = event.target.checked;
      saveState();
    });
    parentReport.querySelector("#setting-motion").addEventListener("change", (event) => {
      state.settings.reduceMotion = event.target.checked;
      saveState();
    });
    parentReport.querySelector("#setting-speech").addEventListener("change", (event) => {
      state.settings.speechEnabled = event.target.checked;
      saveState();
    });
    parentReport.querySelector("#setting-time").addEventListener("change", (event) => {
      state.settings.timeLimitMinutes = Number(event.target.value);
      saveState();
    });
    parentReport.querySelector("#setting-voice").addEventListener("change", (event) => {
      state.settings.voiceName = event.target.value;
      saveState();
    });
    parentReport.querySelector("#preview-voice").addEventListener("click", () => {
      speak("Hello! I am Nori. Let's go to Animal Harbor.");
    });
    parentReport.querySelector("#preview-course").addEventListener("click", () => {
      speak("Hello! I am Nori. Let's go to Animal Harbor.", {
        clip: "audio/nori-preview.mp3",
      });
    });
    parentReport.querySelector("#reset-progress").addEventListener("click", () => {
      if (!window.confirm("确定清除所有关卡进度和本机设置吗？")) return;
      state = core.initialState();
      saveState();
      sessionStartedAt = Date.now();
      breakShown = false;
      parentPanelDialog.close();
      goHome();
      showToast("本机进度已清除");
    });

    parentPanelDialog.showModal();
  }

  gateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.submitter?.value === "cancel") {
      pendingParentAction = null;
      gateDialog.close();
      return;
    }
    if (Number(gateAnswer.value) !== gateExpectedAnswer) {
      gateError.textContent = "答案不对，请家长再算一次。";
      gateAnswer.select();
      return;
    }
    const action = pendingParentAction;
    pendingParentAction = null;
    gateDialog.close();
    action?.();
  });

  soundToggle.addEventListener("click", () => {
    state.settings.sound = !state.settings.sound;
    if (!state.settings.sound) stopVoice();
    saveState();
    showToast(state.settings.sound ? "声音已打开" : "声音已关闭");
  });
  homeButton.addEventListener("click", goHome);
  parentButton.addEventListener("click", () => openParentGate(openParentPanel));
  closeParentPanel.addEventListener("click", () => parentPanelDialog.close());
  finishSessionButton.addEventListener("click", () => {
    breakDialog.close();
    goHome();
  });
  parentContinueButton.addEventListener("click", () => {
    openParentGate(() => {
      breakDialog.close();
      sessionStartedAt = Date.now();
      breakShown = true;
    });
  });

  window.setInterval(() => {
    const elapsedMinutes = (Date.now() - sessionStartedAt) / 60000;
    if (!breakShown && elapsedMinutes >= state.settings.timeLimitMinutes && !breakDialog.open) {
      breakShown = true;
      stopVoice();
      breakDialog.showModal();
    }
  }, 15000);

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Offline installation is optional; gameplay remains available.
    });
  }

  if ("speechSynthesis" in window) {
    refreshVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", refreshVoices);
  }

  syncChrome();
  render();
})();
