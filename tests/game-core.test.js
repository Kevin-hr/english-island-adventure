const test = require("node:test");
const assert = require("node:assert/strict");
const core = require("../game-core.js");

const levels = Array.from({ length: 8 }, (_, index) => ({
  id: `level-${index + 1}`,
  words: index === 0 ? ["cat"] : ["dog"],
}));

test("initial state unlocks only the first level", () => {
  const state = core.initialState();
  assert.equal(state.settings.speechEnabled, true);
  assert.equal(core.isLevelUnlocked(state, 1), true);
  assert.equal(core.isLevelUnlocked(state, 2), false);
  assert.equal(core.nextLevelNumber(state, levels.length), 1);
});

test("completing a level awards sparks once and unlocks the next level", () => {
  const state = core.completeLevel(core.initialState(), levels[0], {
    interactions: 2,
    mistakes: 1,
  });
  assert.equal(state.sparks, 3);
  assert.deepEqual(state.completedLevels, ["level-1"]);
  assert.deepEqual(state.learnedWords, ["cat"]);
  assert.equal(state.totalInteractions, 2);
  assert.equal(state.totalMistakes, 1);
  assert.equal(core.isLevelUnlocked(state, 2), true);

  const replayed = core.completeLevel(state, levels[0], {
    interactions: 1,
    mistakes: 0,
  });
  assert.equal(replayed.sparks, 3);
  assert.deepEqual(replayed.completedLevels, ["level-1"]);
  assert.equal(replayed.totalInteractions, 3);
});

test("sanitizing damaged storage keeps safe settings and valid levels", () => {
  const state = core.sanitizeState(
    {
      completedLevels: ["level-1", "level-1", "level-99", 4],
      sparks: -10,
      totalInteractions: 5.9,
      totalMistakes: "bad",
      learnedWords: ["cat", "cat", 3],
      settings: { sound: false, reduceMotion: true, timeLimitMinutes: 999 },
    },
    levels.length,
  );

  assert.deepEqual(state.completedLevels, ["level-1"]);
  assert.equal(state.sparks, 0);
  assert.equal(state.totalInteractions, 5);
  assert.equal(state.totalMistakes, 0);
  assert.deepEqual(state.learnedWords, ["cat"]);
  assert.equal(state.settings.sound, false);
  assert.equal(state.settings.reduceMotion, true);
  assert.equal(state.settings.speechEnabled, true);
  assert.equal(state.settings.voiceName, "");
  assert.equal(state.settings.timeLimitMinutes, 15);
});

test("current users can explicitly turn microphone challenges off", () => {
  const state = core.sanitizeState(
    { version: core.VERSION, settings: { speechEnabled: false } },
    levels.length,
  );
  assert.equal(state.settings.speechEnabled, false);
});

test("echo playback accepts exactly the three requested speeds", () => {
  assert.deepEqual(core.ECHO_PLAYBACK_RATES, [0.75, 0.5, 0.25]);
  assert.equal(core.normalizePlaybackRate("0.75"), 0.75);
  assert.equal(core.normalizePlaybackRate("0.5"), 0.5);
  assert.equal(core.normalizePlaybackRate("0.25"), 0.25);
  assert.equal(core.normalizePlaybackRate("0.92", 0.75), 0.75);
});

test("parent summary is deterministic", () => {
  const completed = core.completeLevel(core.initialState(), levels[0], {
    interactions: 3,
    mistakes: 1,
  });
  const summary = core.parentSummary(completed, levels.length);
  assert.equal(summary.completed, 1);
  assert.equal(summary.remaining, 7);
  assert.equal(summary.progress, 13);
  assert.equal(summary.interactions, 3);
  assert.equal(summary.accuracy, 75);
});

test("voice activity requires sustained sound instead of one noise spike", () => {
  const silence = core.classifyVoiceActivity([0.004, 0.006, 0.008, 0.005]);
  assert.equal(silence.detected, false);

  const singleSpike = core.classifyVoiceActivity([0.004, 0.005, 0.2, 0.006, 0.004]);
  assert.equal(singleSpike.detected, false);

  const speech = core.classifyVoiceActivity([
    0.01,
    0.034,
    0.042,
    0.037,
    0.055,
    0.049,
    0.031,
    0.044,
    0.039,
  ]);
  assert.equal(speech.detected, true);
  assert.equal(speech.activeFrames, 8);
});

test("expanding to 28 levels preserves the completed first eight levels", () => {
  const completedLevels = Array.from({ length: 8 }, (_, index) => `level-${index + 1}`);
  const state = core.sanitizeState({ completedLevels, sparks: 24 }, 28);

  assert.deepEqual(state.completedLevels, completedLevels);
  assert.equal(state.sparks, 24);
  assert.equal(core.nextLevelNumber(state, 28), 9);
  assert.equal(core.isLevelUnlocked(state, 9), true);
});
