const { test, expect } = require('@playwright/test');

test('Login - validar mensagem 419 Page Expired', async ({ page }) => {

    // Acessar a página de login
    await page.goto('https://blazedemo.com/login');

    // Preencher e-mail e senha
    await page.getByLabel('E-Mail Address').fill('flavia@teste.com');
    await page.getByLabel('Password').fill('123456');

    // Clicar no botão Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Validar a mensagem esperada
    await expect(page.getByText('419 Page Expired')).toBeVisible();

});