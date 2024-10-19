class HeaderBar {
    elements = {
        shopMenu: () => cy.get(".nav"),
        loginName: () => cy.get(".nav > :nth-child(10)")
    }

    clickMenuItem(item: string) {
        this.elements.shopMenu().find('a').contains(item).click();
        return this;
    }

    checkMenuItemExists(item: string) {
        this.elements.shopMenu().find('a').contains(item);
        return this;
    }

    checkLoginNameExists(name: string) {
        this.elements.loginName().contains(name);
        return this;
    }
}

export default HeaderBar;