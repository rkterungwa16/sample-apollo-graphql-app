import { test, expect, type Page } from '@playwright/test';
import { FormTexts } from '../libraries/components/auth/constants';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/frontend task starter/);
});

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });
  test('Should login user', async ({ page }) => {
    const emailInput = page.getByPlaceholder(FormTexts.EMAIL_PLACEHOLDER);
    const passwordInput = page.getByPlaceholder(FormTexts.PASSWORD_PLACEHOLDER);
    const loginBtn = page.getByRole('button', { name: FormTexts.LOGIN_BUTTON });
    await emailInput.fill('test@skand.io');
    await passwordInput.fill('testtest');
    await loginBtn.click();

    await page.waitForResponse(async (resp) => {
      const url = resp.url();
      const status = resp.status();
      const token = await page.evaluate(() => window.localStorage['token']);
      expect(status).toEqual(200);
      expect(url.includes('/todos')).toBeTruthy();
      expect(typeof token === 'string' && token.length).toBeTruthy();
      return true;
    });
  });
});
