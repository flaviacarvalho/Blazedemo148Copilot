class HomePage {
    constructor(page) {
        this.page = page;
        this.url = 'https://blazedemo.com/';

        this.origem = page.locator('select[name="fromPort"]');
        this.destino = page.locator('select[name="toPort"]');
        this.botaoBuscarVoos = page.locator('input[type="submit"]');
    }

    async acessar() {
        await this.page.goto(this.url);
    }

    async acessarLogin() {
        await this.page.goto('https://blazedemo.com/login');
    }

    async selecionarViagem(origem, destino) {
        await this.origem.selectOption({ label: origem });
        await this.destino.selectOption({ label: destino });
        await this.botaoBuscarVoos.click();
    }
}

module.exports = HomePage;