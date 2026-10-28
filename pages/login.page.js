class LoginPage {
    constructor(page) {
        this.page = page;

        this.email = page.getByLabel('E-Mail Address');
        this.password = page.getByLabel('Password');
        this.botaoLogin = page.getByRole('button', { name: 'Login' });
        this.mensagemErro = page.getByText('419 Page Expired');
    }

    async fazerLogin(email, senha) {
        await this.email.fill(email);
        await this.password.fill(senha);
        await this.botaoLogin.click();
    }
}

module.exports = LoginPage;