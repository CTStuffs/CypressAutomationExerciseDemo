// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add("getByDataQa", (selector) => {
    return cy.get(`[data-qa=${selector}]`)
})

Cypress.Commands.add("getValThenCheck", { prevSubject: true }, (subject, dataTestAttr, dataTestVal) => {
    return cy.wrap(subject).should('have.attr', dataTestAttr).and('equal', dataTestVal);

})

Cypress.Commands.add("clearThenType", { prevSubject: true }, (subject, dataTestContent) => {
    return cy.wrap(subject).clear().type(dataTestContent);

})

Cypress.Commands.add("visitHome", () => {
    cy.visit(Cypress.config('baseUrl'))
    cy.url().should('include', Cypress.config('baseUrl'))
})


declare namespace Cypress {
    interface Chainable {
        getByDataQa(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
        getValThenCheck(dataTestAttr: string, dataTestVal: string): Chainable<JQuery<HTMLElement>>
        clearThenType(dataTestContent: string): Chainable<JQuery<HTMLElement>>
        visitHome(): Chainable<JQuery<HTMLElement>>
    }
}
