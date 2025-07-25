// 📄 01_open_page.spec.ts
// This file shows how to open a browser and visit a webpage using Playwright.

// 🧠 What is "import"?
// "import" means: bring in tools from another package so we can use them here.
// '@playwright/test' is a library that helps us write and run browser tests.

import { test, expect } from '@playwright/test';

// 🧪 What is "test"?
// "test" is a function that defines a test case.
// We give it a name ("Open example.com in browser") and then write what the test should do.

test('Open example.com in browser', async ({ page }) => {
  // "page" is like a browser tab. We use it to interact with the website.

  // 👉 Open the webpage
  await page.goto('https://example.com');

  // ✅ Check that the page has the correct title
  // "expect" is used to check if something is true.
  await expect(page).toHaveTitle(/Example Domain/);

  // 🖨 Print a message to the terminal
  console.log("✅ Page opened successfully!");
});
