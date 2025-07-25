// 📄 02_click_element.spec.ts
// This file shows how to click a link or button on a webpage using Playwright.

import { test, expect } from '@playwright/test';

test('Click on a link at example.com', async ({ page }) => {
  // 👉 Open the webpage
  await page.goto('https://example.com');

  // 🖱 Find the first link on the page and click it
  // 'a' means: any link element (HTML tag <a>)
  await page.click('a');

  // ⏳ Wait until the new page is fully loaded
  await page.waitForLoadState('load');

  // 🖨 Print a message to the terminal
  console.log("✅ Link clicked and page navigated.");
});
