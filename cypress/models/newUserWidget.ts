class NewUserWidget {
    elements = {
        newUserHeader: () => cy.get("div[class='signup-form'] h2"),
        signupName: () => cy.getByDataQa("signup-name"),
        signupEmail: () => cy.getByDataQa("signup-email"),
        signupBtn: () => cy.getByDataQa("signup-button"),
        errorMsgSignup: () => cy.get(".signup - form > form > p")

    }



    checkErrorMsgSignup(message: string) {
        this.elements.errorMsgSignup().contains(message);
        return this;
    }

    enterSignupName(username: string) {
        this.elements.signupName().clearThenType(username);
        return this;
    }

    enterSignupEmail(email: string) {
        this.elements.signupEmail().clearThenType(email);
        return this;
    }

    clickSignupButton() {
        this.elements.signupBtn().click();
        return this;
    }


}

export default NewUserWidget;