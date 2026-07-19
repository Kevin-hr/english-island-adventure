from __future__ import annotations

import json
import os
import re
from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("GAME_URL", "http://127.0.0.1:4173/?v=12")
ARTIFACTS = Path(__file__).parent / "artifacts"
ARTIFACTS.mkdir(parents=True, exist_ok=True)


def click_and_wait(page, selector: str, wait_ms: int = 850) -> None:
    page.locator(selector).click()
    page.wait_for_timeout(wait_ms)


def main() -> None:
    page_errors: list[str] = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            service_workers="block",
        )
        page = context.new_page()
        page.on("pageerror", lambda error: page_errors.append(str(error)))
        page.add_init_script(
            """
            class FakeSpeechRecognition {
              constructor() {
                this.lang = "";
                this.interimResults = false;
                this.maxAlternatives = 1;
              }
              start() {
                setTimeout(() => {
                  this.onresult?.({ results: [[{ transcript: "I see a cat" }]] });
                }, 80);
              }
              stop() {}
            }
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
        assert "点亮灯塔" in page.locator("h1").first.text_content()
        assert page.locator("[data-level='2']").is_disabled()
        page.screenshot(path=ARTIFACTS / "01-home.png", full_page=True)

        with page.expect_response(
            lambda response: "audio/level-1-find-cat.mp3" in response.url
        ) as audio_response:
            click_and_wait(page, "#continue-button", 550)
        assert audio_response.value.ok
        assert "Find the cat" not in page.locator(".mission-callout").text_content()
        assert "听声音，找答案" in page.locator(".mission-callout").text_content()
        page.screenshot(path=ARTIFACTS / "02-level-one.png", full_page=True)
        click_and_wait(page, "[data-answer='cat']")
        click_and_wait(page, "#completion-next", 250)

        page.screenshot(path=ARTIFACTS / "02b-red-key.png", full_page=True)
        click_and_wait(page, "[data-answer='red']")
        click_and_wait(page, "#completion-next", 250)

        page.locator("[data-item='dog']").click()
        click_and_wait(page, "#boat-target")
        click_and_wait(page, "#completion-next", 250)

        click_and_wait(page, "[data-answer='s']")
        click_and_wait(page, "#completion-next", 250)

        page.locator("[data-letter='C']").click()
        page.locator("[data-letter='A']").click()
        click_and_wait(page, "[data-letter='T']")
        click_and_wait(page, "#completion-next", 250)

        click_and_wait(page, "[data-answer='fish']")
        click_and_wait(page, "#completion-next", 250)

        speed_options = page.locator("[data-speed]")
        assert speed_options.count() == 3
        assert speed_options.all_text_contents() == ["0.75×", "0.50×", "0.25×"]
        assert page.locator("[data-speed='0.75']").get_attribute("class").find("selected") >= 0
        page.locator("[data-speed='0.5']").click()
        assert page.locator("#listen-echo").get_attribute("data-rate") == "0.5"
        page.locator("[data-speed='0.25']").click()
        assert page.locator("#listen-echo").get_attribute("data-rate") == "0.25"
        page.locator("[data-speed='0.75']").click()
        assert page.evaluate("window.SpeechRecognition.name") == "FakeSpeechRecognition"
        click_and_wait(page, "#start-mic", 150)
        assert "说完了" in page.locator("#start-mic").text_content()
        click_and_wait(page, "#start-mic", 950)
        assert page.locator(".completion").count() == 1, page.locator("body").text_content()
        click_and_wait(page, "#completion-next", 250)

        click_and_wait(page, "[data-answer='red']")
        click_and_wait(page, "[data-answer='dog']")
        page.locator("[data-letter='C']").click()
        page.locator("[data-letter='A']").click()
        click_and_wait(page, "[data-letter='T']")
        page.wait_for_timeout(1700)
        click_and_wait(page, "#echo-fallback")

        assert "动物港得救了" in page.locator(".completion h1").text_content()
        page.screenshot(path=ARTIFACTS / "03-boss-complete.png", full_page=True)
        click_and_wait(page, "#completion-home", 250)
        assert page.locator("#spark-count").text_content() == "24"
        assert not page.locator("[data-level='9']").is_disabled()

        click_and_wait(page, "[data-level='9']", 550)
        assert "Good morning, Ms. Lee." not in page.locator(".mission-callout").text_content()
        assert "听声音，找答案" in page.locator(".mission-callout").text_content()
        assert page.locator("#brand-subtitle").text_content() == "School City"
        page.screenshot(path=ARTIFACTS / "03b-school-city.png", full_page=True)
        click_and_wait(page, "#home-button", 250)

        page.locator("#parent-button").click()
        question = page.locator("#gate-question").text_content()
        numbers = [int(value) for value in re.findall(r"\d+", question)]
        page.locator("#gate-answer").fill(str(sum(numbers)))
        page.locator("#parent-gate-form .primary-button").click()
        page.wait_for_timeout(150)
        assert page.locator("#parent-panel-dialog").get_attribute("open") == ""
        report_text = page.locator("#parent-report").text_content()
        assert "8/28" in report_text
        assert "open the door" in report_text
        page.screenshot(path=ARTIFACTS / "04-parent-report.png", full_page=True)
        page.locator("#setting-voice").scroll_into_view_if_needed()
        assert page.locator("#setting-voice option").count() >= 1
        page.locator("#preview-voice").click()
        page.locator("#preview-course").click()
        page.screenshot(path=ARTIFACTS / "04b-voice-setting.png", full_page=True)

        stored = json.loads(
            page.evaluate("localStorage.getItem('english-island-adventure-state')")
        )
        assert len(stored["completedLevels"]) == 8
        assert stored["sparks"] == 24
        assert not page_errors, f"Browser errors: {' | '.join(page_errors)}"

        mobile_context = browser.new_context(
            viewport={"width": 390, "height": 844},
            service_workers="block",
        )
        mobile_page = mobile_context.new_page()
        mobile_page.goto(BASE_URL, wait_until="networkidle")
        mobile_page.locator("#continue-button").click()
        mobile_page.wait_for_timeout(250)
        assert mobile_page.locator(".choice-card").count() == 3
        assert mobile_page.evaluate(
            "document.documentElement.scrollWidth <= window.innerWidth"
        )
        mobile_page.screenshot(
            path=ARTIFACTS / "05-mobile-level.png", full_page=True
        )
        mobile_context.close()

        offline_context = browser.new_context(
            viewport={"width": 900, "height": 700},
            service_workers="allow",
        )
        offline_page = offline_context.new_page()
        offline_page.goto(BASE_URL, wait_until="networkidle")
        offline_page.wait_for_function(
            "navigator.serviceWorker.controller !== null", timeout=10000
        )
        offline_page.reload(wait_until="networkidle")
        offline_context.set_offline(True)
        offline_page.reload(wait_until="domcontentloaded")
        assert "点亮灯塔" in offline_page.locator("h1").first.text_content()
        offline_context.close()

        tablet_context = browser.new_context(service_workers="block")
        tablet_page = tablet_context.new_page()
        tablet_page.goto(f"{BASE_URL}&resume=9", wait_until="networkidle")
        assert tablet_page.locator("#continue-button").text_content().strip() == "继续第 9 关"
        assert not tablet_page.locator("[data-level='9']").is_disabled()
        tablet_state = json.loads(
            tablet_page.evaluate("localStorage.getItem('english-island-adventure-state')")
        )
        assert len(tablet_state["completedLevels"]) == 8
        assert tablet_state["sparks"] == 24
        tablet_context.close()

        boss_context = browser.new_context(service_workers="block")
        boss_page = boss_context.new_page()
        boss_page.goto(BASE_URL, wait_until="networkidle")
        boss_page.evaluate(
            """
            localStorage.setItem('english-island-adventure-state', JSON.stringify({
              completedLevels: Array.from({ length: 23 }, (_, index) => `level-${index + 1}`),
              sparks: 69
            }));
            """
        )
        boss_page.reload(wait_until="networkidle")
        boss_page.locator("[data-level='24']").click()
        boss_page.wait_for_timeout(250)
        boss_prompt = boss_page.locator(".mission-callout").text_content()
        assert "Put on your shoes." not in boss_prompt
        assert "听声音，找答案" in boss_prompt
        boss_context.close()

        browser.close()
    print("E2E passed: hidden listening answers, speech, mobile, offline, and tablet resume.")


if __name__ == "__main__":
    main()
