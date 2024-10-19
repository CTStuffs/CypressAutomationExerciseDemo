class ProductListPage {
    elements = {
        productLists: () => cy.get('.features_items'),
        productItems: () => cy.get('.features_items > .col-sm-4'),
        searchBar: () => cy.get('#search_product'),
        searchBtn: () => cy.get('#submit_search'),
        titleBar: () => cy.get('.title.text-center')
    }


    selectProduct(nth: number) {
        this.elements.productItems().eq(nth).find('.choose').click();
        return this;
    }

    addProductToCart(nth: number) {
        this.elements.productItems().eq(nth).find('.add-to-cart').eq(0).click();
        return this;
    }

    checkProductExists(productName: string) {
        this.elements.productItems().contains(productName).should('exist')
        return this;
    }

    searchProduct(searchText: string) {
        this.elements.searchBar().type(searchText);
        this.elements.searchBtn().click();
        return this;
    }

    checkTitle(title: string) {
        this.elements.titleBar().contains(title);
        return this;
    }
}

export default ProductListPage;