const { test, expect } = require('@playwright/test');
const { parse } = require('csv-parse/sync');
const { readFileSync } = require('fs');
const path = require('path');

const VacationPage = require('../pages/vacation.page');

const arquivoCSV = path.join(__dirname, '../data/csv/destino.csv');

const massa = parse(
    readFileSync(arquivoCSV),
    {
        columns: true,
        skip_empty_lines: true
    }
);

massa.forEach(({ destino }) => {

    test(`Destino da semana com DDT - ${destino}`, async ({ page }) => {

        const vacationPage = new VacationPage(page);

        await vacationPage.acessarHome();

        await vacationPage.acessarDestinoSemana();

        await expect(vacationPage.tituloDestino).toContainText(destino);

    });

});