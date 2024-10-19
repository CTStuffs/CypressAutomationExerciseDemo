import ContactUsPage from '../models/contactUsPage'
import HeaderBar from '../models/headerBar'
const contactUsP = new ContactUsPage();
const headerB = new HeaderBar();
describe('Login functionality', () => {

    beforeEach(() => {
        cy.visitHome();
    })

    it('Test Case 6: Contact Us Form', () => {

        headerB.clickMenuItem("Contact us");
        contactUsP.fillContactForm("name", "email@email", "subject", "message").uploadFile("README.md").clickSubmit().checkSuccessMsg("Success! Your details have been submitted successfully.").clickHome();
        cy.url().should('include', Cypress.config('baseUrl'))

    });

    it('Test Case 7: Verify Test Cases Page', () => {
        headerB.clickMenuItem("Test Cases");
        cy.url().should('include', 'test_cases')

    });
});