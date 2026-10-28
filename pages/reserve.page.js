class ReservePage {
    constructor(page) {
        this.page = page;

        this.titulo = page.locator('h3');
        this.botoesEscolherVoo = page.locator('input[type="submit"]');
    }

    async escolherPrimeiroVoo() {
        await this.botoesEscolherVoo.first().click();
    }
}

module.exports = ReservePage;