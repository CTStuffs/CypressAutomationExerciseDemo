class RegisterPage {
    elements = {
        genderSelect: () => cy.get("label[for='id_gender1']"),
        nameField: () => cy.getByDataQa('name'),
        emailField: () => cy.getByDataQa('email'),
        passwordField: () => cy.getByDataQa('password'),
        daySelect: () => cy.getByDataQa('days'),
        monthSelect: () => cy.getByDataQa('months'),
        yearSelect: () => cy.getByDataQa('years'),
        newsletterCheck: () => cy.get("label[for='newsletter']"),
        optinCheck: () => cy.get("label[for='optin']"),
        firstNameField: () => cy.getByDataQa("first_name"),
        lastnameField: () => cy.getByDataQa("last_name"),
        addressField: () => cy.getByDataQa("address"),
        countrySelect: () => cy.getByDataQa("country"),
        stateField: () => cy.getByDataQa("state"),
        cityField: () => cy.getByDataQa("city"),

        zipcodeField: () => cy.getByDataQa("zipcode"),
        mobileField: () => cy.getByDataQa("mobile_number"),
        createAccountBtn: () => cy.getByDataQa("create-account"),
    }

    clickGender() {
        this.elements.genderSelect().click();
        return this;
    }

    checkPrevInputtedVals(userName: string, email: string) {
        this.elements.nameField().getValThenCheck('value', userName);
        this.elements.emailField().getValThenCheck('value', email);
        return this;

    }

    enterPasswordField(password: string) {
        this.elements.passwordField().clearThenType(password);
        return this;
    }

    dateSelect(day: string, month: string, year: string) {
        this.elements.daySelect().select(day);
        this.elements.monthSelect().select(month);
        this.elements.yearSelect().select(year);
        return this;
    }

    clickNewsletterCheck() {
        this.elements.newsletterCheck().click();
        return this;
    }

    clickOptinCheck() {
        this.elements.optinCheck().click();
        return this;
    }

    enterAddressFields(firstName: string, lastName: string, address: string, country: string, state: string, city: string, zipcode: string, mobile: string) {
        this.elements.firstNameField().clearThenType(firstName);
        this.elements.lastnameField().clearThenType(lastName);

        this.elements.addressField().clearThenType(address);

        this.elements.countrySelect().select(country);
        this.elements.stateField().clearThenType(state);
        this.elements.cityField().clearThenType(city);
        this.elements.zipcodeField().clearThenType(zipcode);
        this.elements.mobileField().clearThenType(mobile);
        return this;
    }

    clickCreateAccount() {
        this.elements.createAccountBtn().click();
        return this;
    }

}

export default RegisterPage;