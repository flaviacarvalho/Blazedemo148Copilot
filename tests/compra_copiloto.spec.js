// @ts-check
import { test, expect } from '@playwright/test';
 
test('Comprar Copiloto', async ({ page }) => {
  await page.goto('https://www.blazedemo.com'); // Replace with the actual URL
 
  // Selecionar a cidade de origem
  await page.selectOption('select[name="fromPort"]', 'São Paolo');
 
  // Selecionar a cidade de destino
  await page.selectOption('select[name="toPort"]', 'Rome');
 
  // Clicar no botão "Find Flights"
  await page.click('input[type="submit"]');
 
  // Selecionar o primeiro voo disponível
  await page.click('input[type="submit"]:nth-of-type(1)');
 
  // Preencher o formulário de compra
  await page.fill('input[name="inputName"]', 'John Doe');
  await page.fill('input[name="address"]', '123 Main St');
  await page.fill('input[name="city"]', 'Anytown');
  await page.fill('input[name="state"]', 'CA');
  await page.fill('input[name="zipCode"]', '12345');
  await page.selectOption('select[name="cardType"]', 'Visa');
  await page.fill('input[name="creditCardNumber"]', '4111111111111111');
  await page.fill('input[name="creditCardMonth"]', '12');
  await page.fill('input[name="creditCardYear"]', '2025');
  await page.fill('input[name="nameOnCard"]', 'John Doe');
 
  // Marcar a opção "Remember me"
  await page.check('input[name="rememberMe"]');
 
  // Clicar no botão "Purchase Flight"
  await page.click('input[type="submit"]:nth-of-type(1)');
 
  // Verificar se a compra foi concluída com sucesso
  await expect(page.locator('h1')).toHaveText('Thank you for your purchase today!');
 
  // Verificar o campo ammount
  const amountText = await page.locator('td:has-text("Amount") + td').textContent();
  expect(amountText).toBe('555 USD'); // Replace with the expected amount
 
 
})