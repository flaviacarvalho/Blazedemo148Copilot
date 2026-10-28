class VacationPage {
    constructor(page) {
        this.page = page;

        this.linkDestinoSemana = page.getByRole('link', {
            name: /destination of the week/i
        });

        this.tituloDestino = page.getByText(
            /Destination of the week: Hawaii/i
        );
    }

    async acessarHome() {
        await this.page.goto('https://blazedemo.com/');
    }

    async acessarDestinoSemana() {
        await this.linkDestinoSemana.click();
    }
}

module.exports = VacationPage;