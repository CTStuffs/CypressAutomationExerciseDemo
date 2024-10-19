class LoginUserWidget {
    elements = {
        loginHeader: () => cy.get("div[class='login-form'] h2"),
        loginEmail: () => cy.getByDataQa("login-email"),
        loginPassword: () => cy.getByDataQa("login-password"),
        loginBtn: () => cy.getByDataQa("login-button"),
        errorMsgLogin: () => cy.get('.login-form > form> p'),

    }

    checkErrorMsgLogin(message: string) {
        this.elements.errorMsgLogin().contains(message);
        return this;
    }

    enterLoginEmail(email: string) {
        this.elements.loginEmail().clearThenType(email);
        return this;
    }

    enterLoginPassword(password: string) {
        this.elements.loginPassword().clearThenType(password);
        return this;
    }

    clickLoginButton() {
        this.elements.loginBtn().click();
        return this;
    }



}

export default LoginUserWidget;