class HomePage {
    constructor(page) {
        this.page = page;
        this.url = 'https://blazedemo.com/'; //sabe qual é a URL da Home
    }

    async acessar() {
        await this.page.goto(this.url); //abre a Home
    }

    async acessarLogin() { 
        await this.page.goto('https://blazedemo.com/login'); //leva para a página de Login
    }
}

module.exports = HomePage;