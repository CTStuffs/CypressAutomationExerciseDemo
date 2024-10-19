class AccountCreatedPage {

    elements = {
        accountCreatedMsg: () => cy.getByDataQa("account-created").get("b"),
        accountDeletedMsg: () => cy.getByDataQa("account-deleted"),
        continueBtn: () => cy.getByDataQa("continue-button")
    }

    checkAccountCreatedMsg(text: string) {
        this.elements.accountCreatedMsg().contains(text);
        return this;
    }


    checkAccountDeletedMsg(text: string) {
        this.elements.accountDeletedMsg().contains(text);
        return this;
    }
    clickContinueBtn() {
        this.elements.continueBtn().click();
        return this;
    }


}
export default AccountCreatedPage;