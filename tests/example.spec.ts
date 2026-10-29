import { test, expect } from '@playwright/test';

test('navigate to agent portal', async ({ page }) => {
  // Go to the Goodville homepage
  await page.goto('https://qa.goodville.com/');

  // Click on the agent portal link
  await page.click('a[href="/agents"]');

  // Expect the agent portal login page to have a title
  await expect(page).toHaveTitle('Log in | Agents Login');
});

test('agent portal login', async ({ page }) => {
  // Go to the agent portal login page directly
  await page.goto('https://qa.goodville.com/agents');

  // Expect the agent portal login page to have a title
  await expect(page).toHaveTitle('Log in | Agents Login');

  // Fill in the login form
  await page.fill('input[name="username"]', 'yutest_uw');
  await page.fill('input[name="password"]', '4quality');

  // Click the login button
  await page.click('button[type="submit"]');

  // Expect the agent dashboard to have a welcome message
  await expect(page.locator('.heading3')).toHaveText("Test_qa's Home");

  // Expect the agent dashboard to have a welcome message
  await expect(page.locator('.heading3')).toBeVisible();
});