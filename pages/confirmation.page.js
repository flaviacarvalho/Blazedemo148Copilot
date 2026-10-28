class ConfirmationPage {
    constructor(page) {
        this.page = page;

        this.mensagemSucesso = page.getByRole('heading', {
            name: 'Thank you for your purchase today!'
        });

        this.tabela = page.locator('table');
    }

    async validarCompra() {
        await this.mensagemSucesso.waitFor();
    }
}

module.exports = ConfirmationPage;