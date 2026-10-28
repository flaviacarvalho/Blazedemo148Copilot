const { test, expect } = require('@playwright/test');
const { parse } = require('csv-parse/sync');
const { readFileSync } = require('fs');
const path = require('path');

const HomePage = require('../pages/home.page');
const ReservePage = require('../pages/reserve.page');
const PurchasePage = require('../pages/purchase.page');
const ConfirmationPage = require('../pages/confirmation.page');

const arquivoCSV = path.join(__dirname, '../data/csv/compra.csv');

const massa = parse(
    readFileSync(arquivoCSV),
    {
        columns: true,
        skip_empty_lines: true
    }
);

massa.forEach(({
    origem,
    destino,
    nome,
    endereco,
    cidade,
    estado,
    cep,
    tipoCartao,
    numeroCartao,
    mesCartao,
    anoCartao,
    nomeCartao
}) => {

    test(`Compra com DDT - ${origem} para ${destino}`, async ({ page }) => {

        const homePage = new HomePage(page);
        const reservePage = new ReservePage(page);
        const purchasePage = new PurchasePage(page);
        const confirmationPage = new ConfirmationPage(page);

        // Home
        await homePage.acessar();
        await homePage.selecionarViagem(origem, destino);

        // Reserva
        await reservePage.escolherPrimeiroVoo();

        // Compra
        await purchasePage.preencherDados(
            nome,
            endereco,
            cidade,
            estado,
            cep,
            tipoCartao,
            numeroCartao,
            mesCartao,
            anoCartao,
            nomeCartao
        );

        await purchasePage.concluirCompra();

        // Confirmação
        await confirmationPage.validarCompra();

        await expect(
            confirmationPage.mensagemSucesso
        ).toBeVisible();

    });

});