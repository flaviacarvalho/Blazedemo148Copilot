const { test, expect } = require('@playwright/test');
const { parse } = require('csv-parse/sync');
const { readFileSync } = require('fs');
const path = require('path');

const RegisterPage = require('../pages/register.page');

const arquivoCSV = path.join(__dirname, '../data/csv/cadastro.csv');

const massa = parse(
    readFileSync(arquivoCSV),
    {
        columns: true,
        skip_empty_lines: true
    }
);

massa.forEach(({ nome, empresa, email, senha }) => {

    test(`Cadastro com DDT - ${email}`, async ({ page }) => {

        const registerPage = new RegisterPage(page);

        // Acessar página de cadastro
        await registerPage.acessar();

        // Realizar cadastro com os dados do CSV
        await registerPage.cadastrar(nome, empresa, email, senha);

        await expect(page.locator('body')).toContainText('419');
        
        await expect(page.locator('body')).toContainText('Page Expired');

        // O BlazeDemo é um site de treinamento e o cadastro
        // não é efetivamente processado
        //await expect(page.getByText('419 Page Expired')).toBeVisible();

    });

});