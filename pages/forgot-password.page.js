class ForgotPasswordPage {
    constructor(page) {
        this.page = page;

        this.email = page.getByLabel('E-Mail Address');
        this.botaoEnviar = page.getByRole('button', { name: 'Send Password Reset Link' });
    }

    async acessar() {
        await this.page.goto('https://blazedemo.com/password/reset');
    }

    async solicitarRecuperacao(email) {
        await this.email.fill(email);
        await this.botaoEnviar.click();
    }
}

module.exports = ForgotPasswordPage;