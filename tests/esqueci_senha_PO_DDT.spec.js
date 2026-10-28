const { test, expect } = require('@playwright/test');
const { parse } = require('csv-parse/sync');
const { readFileSync } = require('fs');
const path = require('path');

const ForgotPasswordPage = require('../pages/forgot-password.page');

const arquivoCSV = path.join(__dirname, '../data/csv/esqueci_senha.csv');

const massa = parse(
    readFileSync(arquivoCSV),
    {
        columns: true,
        skip_empty_lines: true
    }
);

massa.forEach(({ email }) => {

    test(`Esqueci a senha com DDT - ${email}`, async ({ page }) => {

        const forgotPasswordPage = new ForgotPasswordPage(page);

        await forgotPasswordPage.acessar();

        await forgotPasswordPage.solicitarRecuperacao(email);

        await expect(page).toHaveURL(/\/password\/email$/);

    });

});