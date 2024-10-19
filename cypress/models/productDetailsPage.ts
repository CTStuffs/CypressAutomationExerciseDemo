class productDetailsPage {
    elements = {
        productInformation: () => cy.get('.product-information'),
        quantityField: () => cy.get('#quantity'),
        addToCartBtn: () => cy.get('.cart')
    }

    checkProductInformation(info: string[]) {
        info.forEach(i => {
            this.elements.productInformation().contains(i);

        })
    }

    changeQuantity(quantity: string) {
        this.elements.quantityField().clearThenType(quantity);
    }

    addToCart() {
        this.elements.addToCartBtn().click();
    }

}



export default productDetailsPage;