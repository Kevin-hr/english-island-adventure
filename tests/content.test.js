const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

delete global.GAME_LEVELS;
require("../levels.js");

const levels = global.GAME_LEVELS;
const worlds = global.GAME_WORLDS;

function normalized(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

test("every level has one Chinese instruction and one exact spoken prompt", () => {
  assert.equal(levels.length, 28);
  assert.equal(worlds.length, 4);
  for (const level of levels) {
    assert.ok(level.title, `${level.id} needs a story title`);
    assert.ok(level.skill, `${level.id} needs a skill label`);
    assert.ok(level.instruction, `${level.id} needs a Chinese instruction`);
    assert.match(level.prompt, /[.!?。！？]$/, `${level.id} prompt needs final punctuation`);
    assert.equal("guide" in level, false, `${level.id} must not have a second spoken guide`);
    assert.equal("subtitle" in level, false, `${level.id} must not duplicate the prompt as a subtitle`);
    assert.ok(worlds.some((world) => world.id === level.worldId));
    if (level.type !== "boss") {
      assert.ok(level.audio, `${level.id} needs a natural voice clip`);
      assert.ok(
        fs.existsSync(path.join(__dirname, "..", level.audio)),
        `${level.id} audio file is missing`,
      );
    }
  }
});

test("choice prompts name their declared target and contain the answer option", () => {
  for (const level of levels.filter((item) => ["choice", "sound-match", "story"].includes(item.type))) {
    assert.ok(level.options.some((option) => option.id === level.answer));
    assert.ok(level.promptTarget, `${level.id} needs a prompt target`);
    assert.ok(normalized(level.prompt).includes(normalized(level.promptTarget)));
  }
});

test("word forge content can build its declared answer", () => {
  const forge = levels.find((level) => level.type === "word-forge");
  assert.equal([...forge.letters].sort().join(""), [...forge.answer].sort().join(""));
  assert.ok(normalized(forge.prompt).includes(forge.answer.toLowerCase()));
});

test("echo prompts are covered by accepted speech phrases", () => {
  const echoes = [
    ...levels.filter((level) => level.type === "echo"),
    ...levels.filter((level) => level.type === "boss").flatMap((level) => level.steps.filter((step) => step.type === "echo")),
  ];
  for (const echo of echoes) {
    const spoken = normalized(echo.prompt);
    assert.ok(echo.accepted.some((phrase) => spoken.includes(normalized(phrase))));
  }
});

test("Boss steps each have a visible instruction, audio, and valid answer", () => {
  const bosses = levels.filter((level) => level.type === "boss");
  assert.equal(bosses.length, 3);
  for (const boss of bosses) {
    assert.equal(boss.steps.length, 4);
    for (const step of boss.steps) {
      assert.ok(step.instruction);
      assert.match(step.prompt, /[.!?]$/);
      assert.ok(fs.existsSync(path.join(__dirname, "..", step.audio)));
      if (step.type === "choice") {
        assert.ok(step.options.some((option) => option.id === step.answer));
        assert.ok(normalized(step.prompt).includes(normalized(step.promptTarget)));
      }
    }
  }
});

test("level numbers remain sequential so old progress unlocks level 9", () => {
  levels.forEach((level, index) => {
    assert.equal(level.id, `level-${index + 1}`);
    assert.equal(level.number, index + 1);
  });
});
