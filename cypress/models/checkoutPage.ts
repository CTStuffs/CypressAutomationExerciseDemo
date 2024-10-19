class CheckoutPage {
    elements = {
        addressDelivery: () => cy.get('#address_delivery'),
        addressInvoice: () => cy.get('#address_invoice'),
        orderMsgField: () => cy.get("textarea[name='message']"),
        placeOrderBtn: () => cy.get('.check_out')
    }

    enterOrderMsg(text: string) {
        this.elements.orderMsgField().type(text);
        return this;
    }
    clickPlaceOrderBtn() {
        this.elements.placeOrderBtn().click();
        return this;
    }
}

export default CheckoutPage;