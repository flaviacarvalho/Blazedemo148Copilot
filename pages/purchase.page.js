class PurchasePage {
    constructor(page) {
        this.page = page;

        this.nome = page.locator('#inputName');
        this.endereco = page.locator('#address');
        this.cidade = page.locator('#city');
        this.estado = page.locator('#state');
        this.cep = page.locator('#zipCode');
        this.tipoCartao = page.locator('#cardType');
        this.numeroCartao = page.locator('#creditCardNumber');
        this.mesCartao = page.locator('#creditCardMonth');
        this.anoCartao = page.locator('#creditCardYear');
        this.nomeCartao = page.locator('#nameOnCard');
        this.botaoComprar = page.locator('input[type="submit"]');
    }

    async preencherDados(
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
    ) {
        await this.nome.fill(nome);
        await this.endereco.fill(endereco);
        await this.cidade.fill(cidade);
        await this.estado.fill(estado);
        await this.cep.fill(cep);
        await this.tipoCartao.selectOption(tipoCartao);
        await this.numeroCartao.fill(numeroCartao);
        await this.mesCartao.fill(mesCartao);
        await this.anoCartao.fill(anoCartao);
        await this.nomeCartao.fill(nomeCartao);
    }

    async concluirCompra() {
        await this.botaoComprar.click();
    }
}

module.exports = PurchasePage;