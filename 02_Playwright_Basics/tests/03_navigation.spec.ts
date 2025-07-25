// 📄 03_navigation.spec.ts
// This file shows how to wait for elements and check if they are visible.

import { test, expect } from '@playwright/test';

test('Navigate and wait for content', async ({ page }) => {
  // 👉 Open the webpage
  await page.goto('https://example.com');

  // ⏳ Wait until the heading (title) appears
  await page.waitForSelector('h1');

  // 🔍 Find the heading element
  const heading = await page.locator('h1');

  // ✅ Check that the heading is visible
  await expect(heading).toBeVisible();

  // 🖨 Print the heading text to the terminal
  const text = await heading.textContent();
  console.log("✅ Heading found:", text);
});
