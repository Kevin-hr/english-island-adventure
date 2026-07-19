from __future__ import annotations

import os
import subprocess
from pathlib import Path

from playwright.sync_api import sync_playwright


BASE_URL = os.environ.get("GAME_URL", "http://127.0.0.1:4173/?v=12")
ARTIFACTS = Path(__file__).parent / "artifacts"
ARTIFACTS.mkdir(parents=True, exist_ok=True)


def main() -> None:
    page_errors: list[str] = []
    stable_levels = subprocess.run(
        ["git", "show", "HEAD:levels.js"],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
    ).stdout
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        desktop = browser.new_context(
            viewport={"width": 1365, "height": 900}, service_workers="block"
        )
        page = desktop.new_page()
        page.route(
            "**/levels.js*",
            lambda route: route.fulfill(
                status=200, content_type="text/javascript; charset=utf-8", body=stable_levels
            ),
        )
        page.on("pageerror", lambda error: page_errors.append(str(error)))
        page.goto(BASE_URL, wait_until="networkidle")
        assert page.locator(".hero").count() == 1
        assert page.locator(".zimi-hero").count() == 1
        assert page.locator(".dream-bat").count() == 1
        assert page.locator(".star-cat").count() == 1
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth")
        page.screenshot(path=ARTIFACTS / "10-purple-dream-home.png", full_page=True)

        page.locator("#continue-button").click()
        page.wait_for_timeout(300)
        assert page.locator(".mini-zimi-face").count() == 1
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth")
        page.screenshot(path=ARTIFACTS / "11-purple-dream-level.png", full_page=True)
        desktop.close()

        mobile = browser.new_context(
            viewport={"width": 390, "height": 844}, service_workers="block"
        )
        mobile_page = mobile.new_page()
        mobile_page.route(
            "**/levels.js*",
            lambda route: route.fulfill(
                status=200, content_type="text/javascript; charset=utf-8", body=stable_levels
            ),
        )
        mobile_page.goto(BASE_URL, wait_until="networkidle")
        assert mobile_page.locator(".zimi-hero").count() == 1
        mobile_page.screenshot(
            path=ARTIFACTS / "12-purple-dream-mobile.png", full_page=True
        )
        overflow = mobile_page.evaluate(
            """
            [...document.querySelectorAll('body *')]
              .map((element) => ({
                name: `${element.tagName}.${element.className}`,
                left: Math.round(element.getBoundingClientRect().left),
                right: Math.round(element.getBoundingClientRect().right)
              }))
              .filter((item) => item.left < -1 || item.right > innerWidth + 1)
              .slice(0, 12)
            """
        )
        assert not overflow, overflow
        mobile.close()
        browser.close()

    assert not page_errors, " | ".join(page_errors)
    print("Visual smoke passed: desktop home, level screen, and Huawei-sized mobile layout.")


if __name__ == "__main__":
    main()
