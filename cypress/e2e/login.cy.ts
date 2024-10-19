import signInData from '../data/signin.json';
import LoginUserWidget from '../models/loginUserWidget';
import NewUserWidget from '../models/newUserWidget';
import HeaderBar from '../models/headerBar';
import AccountCreatedPage from '../models/accountCreatedPage';
import RegisterPage from '../models/registerPage';
import randomizeNum from '../support/util';


const loginUserW = new LoginUserWidget();
const newUserW = new NewUserWidget();
const headerB = new HeaderBar();
const registerP = new RegisterPage();
const accountCreateP = new AccountCreatedPage();

describe('Login & Register test cases', () => {

    beforeEach(() => {
        cy.visitHome();

        // would reset the db here if I had access to it
    })

    it('Test Case 1: Register New User', () => {

        let userName = signInData.firstName + " " + signInData.lastName;
        let newEmail = randomizeNum(3) + signInData.email;
        headerB.clickMenuItem("Signup / Login");

        newUserW.enterSignupName(userName).enterSignupEmail(newEmail).clickSignupButton();
        registerP.clickGender().checkPrevInputtedVals(userName, newEmail).dateSelect(signInData.dob.day, signInData.dob.month, signInData.dob.year).clickNewsletterCheck().clickOptinCheck();
        registerP.enterPasswordField(signInData.password).enterAddressFields(signInData.firstName, signInData.lastName, signInData.address.addressFull, signInData.address.country, signInData.address.state, signInData.address.city, signInData.address.zipcode, signInData.address.mobile).clickCreateAccount();


        accountCreateP.checkAccountCreatedMsg("Account Created").clickContinueBtn();

        // if local code was available, we'd get rid of the new account by deleting it straight from the DB
        // unfortunately it isn't, so we have to do this
        // cy.get(".nav > :nth-child(10)").contains(`Logged in as ${signInData.firstName} ${signInData.lastName}`);
        headerB.checkLoginNameExists(`Logged in as ${signInData.firstName} ${signInData.lastName}`).clickMenuItem("Delete Account");
        accountCreateP.checkAccountDeletedMsg("Account Deleted!");
    })


    it('Test Case 3: Login User with incorrect email and password', () => {
        headerB.clickMenuItem("Signup / Login");
        loginUserW.enterLoginEmail(signInData.badSignIn.bademail).enterLoginPassword(signInData.badSignIn.badpassword).clickLoginButton().checkErrorMsgLogin('Your email or password is incorrect!')
    });


});