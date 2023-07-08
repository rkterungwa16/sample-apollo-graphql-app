import { test, expect, type Page } from '@playwright/test';
import { FormTexts } from '../libraries/components/auth/constants';
import { TodoTexts, FormTexts as TodoFormTexts } from '../libraries/components/todos/constants';

const TODO_ITEMS = ['buy some cheese', 'feed the cat', 'book a doctors appointment'];

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});
test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/frontend task starter/);
});

test.describe('Authentication', () => {
  test('Should login user', async ({ page }) => {
    const emailInput = page.getByPlaceholder(FormTexts.EMAIL_PLACEHOLDER);
    const passwordInput = page.getByPlaceholder(FormTexts.PASSWORD_PLACEHOLDER);
    const loginBtn = page.getByRole('button', { name: FormTexts.LOGIN_BUTTON });
    await emailInput.fill('test@skand.io');
    await passwordInput.fill('testtest');
    await loginBtn.click();

    await page.waitForResponse(async (resp) => {
      const status = resp.status();
      const token = await page.evaluate(() => window.localStorage['token']);
      expect(status).toEqual(200);
      expect(typeof token === 'string' && token.length).toBeTruthy();
      return true;
    });
  });
});

test.describe('Todos', () => {
  test.beforeEach(async ({ page }) => {
    const emailInput = page.getByPlaceholder(FormTexts.EMAIL_PLACEHOLDER);
    const passwordInput = page.getByPlaceholder(FormTexts.PASSWORD_PLACEHOLDER);
    const loginBtn = page.getByRole('button', { name: FormTexts.LOGIN_BUTTON });
    await emailInput.fill('test@skand.io');
    await passwordInput.fill('testtest');
    await loginBtn.click();
  });
  test('Should create todo', async ({ page }) => {
    await page.waitForURL('http://localhost:5173/todos');
    const todoInput = page.getByPlaceholder(TodoFormTexts.CREATE_TODO_PLACEHOLDER);
    const todoBtn = page.getByRole('button', { name: TodoFormTexts.CREATE_TODO_BUTTON });
    await todoInput.fill(TODO_ITEMS[0]);
    await todoBtn.click();
    await expect(page.getByText(TODO_ITEMS[0])).toBeDefined();
  });
});
