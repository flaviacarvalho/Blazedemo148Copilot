class RegisterPage {
    constructor(page) {
        this.page = page;

        this.nome = page.getByLabel('Name');
        this.empresa = page.getByLabel('Company');
        this.email = page.getByLabel('E-Mail Address');
        this.senha = page.getByLabel('Password', { exact: true });
        this.confirmarSenha = page.getByLabel('Confirm Password');
        this.botaoRegister = page.getByRole('button', { name: 'Register' });
    }

    async acessar() {
        await this.page.goto('https://blazedemo.com/register');
    }

    async cadastrar(nome, empresa, email, senha) {
        await this.nome.fill(nome);
        await this.empresa.fill(empresa);
        await this.email.fill(email);
        await this.senha.fill(senha);
        await this.confirmarSenha.fill(senha);
        await this.botaoRegister.click();
    }
}

module.exports = RegisterPage;