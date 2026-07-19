from __future__ import annotations

import os

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("GAME_URL", "http://127.0.0.1:4173/?v=9")


def main() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context(service_workers="block")
        page = context.new_page()
        page.add_init_script(
            """
            class FakeAudio {
              constructor(src) {
                this.src = src;
                this.currentTime = 0;
                this.playbackRate = 1;
                this.preservesPitch = true;
              }
              addEventListener() {}
              pause() {}
              play() {
                window.__lastPlaybackRate = this.playbackRate;
                return Promise.resolve();
              }
            }
            class FakeSpeechRecognition {
              start() {
                setTimeout(() => {
                  this.onresult?.({ results: [[{ transcript: "I see a fish" }]] });
                }, 80);
              }
              stop() { this.onend?.(); }
            }
            window.Audio = FakeAudio;
            Object.defineProperty(window, "SpeechRecognition", {
              configurable: true,
              value: FakeSpeechRecognition,
            });
            Object.defineProperty(window, "webkitSpeechRecognition", {
              configurable: true,
              value: FakeSpeechRecognition,
            });
            """
        )

        page.goto(BASE_URL, wait_until="networkidle")
        echo_number = page.evaluate("GAME_LEVELS.find((level) => level.type === 'echo').number")
        page.evaluate(
            """(echoNumber) => {
              localStorage.setItem('english-island-adventure-state', JSON.stringify({
                version: 2,
                completedLevels: Array.from(
                  { length: echoNumber - 1 },
                  (_, index) => `level-${index + 1}`,
                ),
                sparks: (echoNumber - 1) * 3,
              }));
            }""",
            echo_number,
        )
        page.reload(wait_until="networkidle")
        page.locator(f"[data-level='{echo_number}']").click()
        page.wait_for_timeout(250)

        assert page.locator("[data-speed]").all_text_contents() == [
            "0.75×",
            "0.50×",
            "0.25×",
        ]
        for speed in ("0.75", "0.5", "0.25"):
            page.locator(f"[data-speed='{speed}']").click()
            page.locator("#listen-echo").click()
            assert page.evaluate("window.__lastPlaybackRate") == float(speed)

        assert page.locator("#start-mic").text_content() == "🎙️ 开始说"
        page.locator("#start-mic").click()
        page.wait_for_timeout(150)
        assert "说完了" in page.locator("#start-mic").text_content()
        page.locator("#start-mic").click()
        page.wait_for_timeout(900)
        assert page.locator(".completion").count() == 1

        context.close()
        browser.close()
    print("Echo controls passed: 0.75/0.50/0.25 playback and click-to-stop microphone.")


if __name__ == "__main__":
    main()
