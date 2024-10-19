class ModalPopup {
    elements = {
        closeBtn: () => cy.get(".close-modal "),
        registerLoginLink: () => cy.get(".modal-content").find("a[href*='login']")
    }

    closeModal() {
        this.elements.closeBtn().click();
        return this;
    }
    clickLoginLink() {
        this.elements.registerLoginLink().click();
        return this;
    }
}

export default ModalPopup;