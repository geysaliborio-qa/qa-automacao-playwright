import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('CT-005: adicionar produto ao carrinho', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.expectInventory();
  await inventory.addBackpackToCart();
  await inventory.expectCartCount('1');
});
