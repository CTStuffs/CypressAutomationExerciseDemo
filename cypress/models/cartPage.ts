class CartPage {
    elements = {
        checkoutBtn: () => cy.get(".check_out"),
        cartTable: () => cy.get(".cart_info_table"),
        removeItemBtn: () => cy.get(".cart_quantity_delete")

    }

    verifyProductInfo(id: number, description: string, price: string, quantity: string, total: string) {
        let product = `#product-${id}`
        cy.get(product).contains(".cart_description", description);
        cy.get(product).contains(".cart_price", price);
        cy.get(product).contains(".cart_quantity", quantity);
        cy.get(product).contains(".cart_total", total);
        return this;
    }

    verifyProductNotExist(description: string) {
        cy.get(".cart_description").contains(description).should("not.exist");
        return this;
    }

    clickCheckout() {
        this.elements.checkoutBtn().click();
        return this;
    }

    clickRemove(index: number) {
        this.elements.removeItemBtn().eq(index).click();
        return this;
    }
}

export default CartPage;