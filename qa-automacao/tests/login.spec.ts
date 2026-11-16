import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Autenticação — Sauce Demo', () => {
  test('CT-001: login com credenciais válidas', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await login.expectInventory();
  });

  test('CT-002: login com senha inválida', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'senha_incorreta');
    await login.expectError('Username and password do not match');
  });

  test('CT-003: usuário bloqueado', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('locked_out_user', 'secret_sauce');
    await login.expectError('Sorry, this user has been locked out');
  });

  test('CT-004: campos obrigatórios', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await page.locator('[data-test="login-button"]').click();
    await login.expectError('Username is required');
  });
});
