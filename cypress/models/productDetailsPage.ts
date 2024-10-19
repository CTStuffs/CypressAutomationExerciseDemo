class productDetailsPage {
    elements = {
        productInformation: () => cy.get(".product-information"),
        quantityField: () => cy.get("#quantity"),
        addToCartBtn: () => cy.get(".cart")
    }

    checkProductInformation(info: string[]) {
        info.forEach(i => {
            this.elements.productInformation().contains(i);

        })
        return this;
    }

    changeQuantity(quantity: string) {
        this.elements.quantityField().clearThenType(quantity);
        return this;
    }

    addToCart() {
        this.elements.addToCartBtn().click();
        return this;
    }

}



export default productDetailsPage;