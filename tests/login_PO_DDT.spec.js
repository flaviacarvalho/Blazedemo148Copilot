const { test, expect } = require('@playwright/test');
const { parse } = require('csv-parse/sync');
const { readFileSync } = require('fs');

const HomePage = require('../pages/home.page');
const LoginPage = require('../pages/login.page');

const massa = parse(
    readFileSync('data/csv/login.csv'),
    {
        columns: true,
        skip_empty_lines: true
    }
);

massa.forEach(({ email, senha }) => {

    test(`Login com DDT - ${email}`, async ({ page }) => {

        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        // Iniciar pela Home
        await homePage.acessar();

        // Ir para a página de Login
        await homePage.acessarLogin();

        // Fazer login usando os dados do CSV
        await loginPage.fazerLogin(email, senha);

        // Validar mensagem esperada
        await expect(page.locator('body')).toContainText('419');
        await expect(page.locator('body')).toContainText('Page Expired');

    });

});