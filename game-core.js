(function attachGameCore(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.GameCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function createGameCore() {
  "use strict";

  const VERSION = 1;

  function initialState() {
    return {
      version: VERSION,
      completedLevels: [],
      sparks: 0,
      totalInteractions: 0,
      totalMistakes: 0,
      learnedWords: [],
      settings: {
        sound: true,
        reduceMotion: false,
        speechEnabled: false,
        voiceName: "",
        timeLimitMinutes: 15,
      },
    };
  }

  function uniqueStrings(value) {
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter((item) => typeof item === "string"))];
  }

  function sanitizeState(raw, levelCount) {
    const base = initialState();
    if (!raw || typeof raw !== "object") return base;

    const completedLevels = uniqueStrings(raw.completedLevels).filter((id) => {
      const match = /^level-(\d+)$/.exec(id);
      return match && Number(match[1]) >= 1 && Number(match[1]) <= levelCount;
    });

    return {
      version: VERSION,
      completedLevels,
      sparks: Number.isFinite(raw.sparks) && raw.sparks >= 0 ? Math.floor(raw.sparks) : 0,
      totalInteractions:
        Number.isFinite(raw.totalInteractions) && raw.totalInteractions >= 0
          ? Math.floor(raw.totalInteractions)
          : 0,
      totalMistakes:
        Number.isFinite(raw.totalMistakes) && raw.totalMistakes >= 0
          ? Math.floor(raw.totalMistakes)
          : 0,
      learnedWords: uniqueStrings(raw.learnedWords),
      settings: {
        sound: raw.settings?.sound !== false,
        reduceMotion: raw.settings?.reduceMotion === true,
        speechEnabled: raw.settings?.speechEnabled === true,
        voiceName: typeof raw.settings?.voiceName === "string" ? raw.settings.voiceName : "",
        timeLimitMinutes: [10, 15, 20].includes(raw.settings?.timeLimitMinutes)
          ? raw.settings.timeLimitMinutes
          : 15,
      },
    };
  }

  function isLevelUnlocked(state, levelNumber) {
    if (levelNumber <= 1) return true;
    return state.completedLevels.includes(`level-${levelNumber - 1}`);
  }

  function nextLevelNumber(state, levelCount) {
    for (let level = 1; level <= levelCount; level += 1) {
      if (!state.completedLevels.includes(`level-${level}`)) return level;
    }
    return levelCount;
  }

  function completeLevel(state, level, metrics) {
    const wasCompleted = state.completedLevels.includes(level.id);
    const completedLevels = wasCompleted
      ? [...state.completedLevels]
      : [...state.completedLevels, level.id];
    const learnedWords = uniqueStrings([
      ...state.learnedWords,
      ...(level.words || []),
    ]);

    return {
      ...state,
      completedLevels,
      sparks: state.sparks + (wasCompleted ? 0 : 3),
      totalInteractions: state.totalInteractions + Math.max(0, metrics.interactions || 0),
      totalMistakes: state.totalMistakes + Math.max(0, metrics.mistakes || 0),
      learnedWords,
    };
  }

  function progressPercent(state, levelCount) {
    return Math.round((state.completedLevels.length / levelCount) * 100);
  }

  function parentSummary(state, levelCount) {
    const completed = state.completedLevels.length;
    const accuracyDenominator = state.totalInteractions + state.totalMistakes;
    const accuracy = accuracyDenominator
      ? Math.round((state.totalInteractions / accuracyDenominator) * 100)
      : 0;

    return {
      completed,
      remaining: Math.max(0, levelCount - completed),
      progress: progressPercent(state, levelCount),
      interactions: state.totalInteractions,
      accuracy,
      learnedWords: [...state.learnedWords],
    };
  }

  function classifyVoiceActivity(samples, threshold = 0.028, minimumActiveFrames = 7) {
    const safeSamples = Array.isArray(samples)
      ? samples.filter((sample) => Number.isFinite(sample) && sample >= 0)
      : [];
    const activeFrames = safeSamples.filter((sample) => sample >= threshold).length;
    const peak = safeSamples.length ? Math.max(...safeSamples) : 0;
    return {
      detected: activeFrames >= minimumActiveFrames,
      activeFrames,
      peak,
    };
  }

  return {
    VERSION,
    initialState,
    sanitizeState,
    isLevelUnlocked,
    nextLevelNumber,
    completeLevel,
    progressPercent,
    parentSummary,
    classifyVoiceActivity,
  };
});
