class CategoryBar {
    elements = {
        accordion: () => cy.get("#accordian"),
        brandsList: () => cy.get(".brands - name")
    }

    checkExists() {
        this.elements.accordion().should('exist')
        return this;
    }
    clickCategory(category: string) {
        this.elements.accordion().get(`a[href*="#${category}"]`).click();
        return this;
    }

    clickCategoryAndSub(category: string, subcategory: string) {
        let categoryHeader = this.elements.accordion().get(`a[href="#${category}"]`);
        categoryHeader.click();
        cy.get(`#${category}`).get('a').contains(subcategory).click();
        return this;
    }

    clickSubcategory(category: string, subcategory: string) {
        cy.get(`#${category}`).get('a').contains(subcategory).click();
        return this;
    }
    clickBrand(brand: string) {
        this.elements.brandsList().find('li').contains(brand).click();
        return this;
    }
}

export default CategoryBar;