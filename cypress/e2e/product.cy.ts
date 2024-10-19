import HeaderBar from '../models/headerBar'
import ProductListPage from '../models/productListPage'
import ProductDetailsPage from "../models/productDetailsPage"
import productData from "../data/product.json";
import signInData from "../data/signin.json";
import NewUserWidget from '../models/newUserWidget'
import RegisterPage from '../models/registerPage';
import AccountCreatedPage from '../models/accountCreatedPage'

import ModalPopup from "../models/modalPopup"
import CartPage from "../models/cartPage"
import randomizeNum from "../support/util"

const productListP = new ProductListPage();
const productDetailsP = new ProductDetailsPage();
const headerB = new HeaderBar();
const modalP = new ModalPopup();
const cartP = new CartPage();
const newUserW = new NewUserWidget();
const accountCreateP = new AccountCreatedPage();
const registerP = new RegisterPage();


describe('Product page functionality', () => {

    beforeEach(() => {
        cy.visitHome();
    })

    it('Test Case 8: Verify All Products and product detail page', () => {
        headerB.clickMenuItem("Products");
        cy.url().should('include', 'products')
        productListP.selectProduct(0);
        let productT = productData.products[0];
        productDetailsP.checkProductInformation([productT.name, productT.category, productT.availability, productT.price, productT.condition, productT.brand]);
    });


    it('Test Case 9: Search Product', () => {

        headerB.clickMenuItem("Products");
        productListP.searchProduct("White");
        productListP.checkTitle("Searched Products")
        productListP.checkProductExists(productData.products[1].name).checkProductExists(productData.products[2].name).checkProductExists("Printed Off Shoulder Top - White");

    });

    it("Test Case 20: Search Products and Verify Cart After Login", () => {

        let productT1 = productData.products[1];
        let productT2 = productData.products[2];
        let newEmail = randomizeNum(3) + signInData.email;
        let userName = signInData.firstName + " " + signInData.lastName;

        headerB.clickMenuItem("Products");
        productListP.searchProduct("White").checkTitle("Searched Products").checkProductExists(productT1.name).checkProductExists(productT2.name);
        productListP.addProductToCart(0);
        modalP.closeModal();
        productListP.addProductToCart(1);
        modalP.closeModal();
        headerB.clickMenuItem("Cart");

        cartP.verifyProductInfo(productT1.id, productT1.name, productT1.price, "1", productT1.price).verifyProductInfo(productT2.id, productT2.name, productT2.price, "1", productT2.price);
        headerB.clickMenuItem("Signup / Login");
        newUserW.enterSignupName(userName).enterSignupEmail(newEmail).clickSignupButton();
        registerP.clickGender().checkPrevInputtedVals(userName, newEmail).dateSelect(signInData.dob.day, signInData.dob.month, signInData.dob.year).clickNewsletterCheck().clickOptinCheck();
        registerP.enterPasswordField(signInData.password).enterAddressFields(signInData.firstName, signInData.lastName, signInData.address.addressFull, signInData.address.country, signInData.address.state, signInData.address.city, signInData.address.zipcode, signInData.address.mobile).clickCreateAccount();


        accountCreateP.checkAccountCreatedMsg("Account Created").clickContinueBtn();
        headerB.clickMenuItem("Cart");

        cartP.verifyProductInfo(productT1.id, productT1.name, productT1.price, "1", productT1.price).verifyProductInfo(productT2.id, productT2.name, productT2.price, "1", productT2.price);
        headerB.clickMenuItem("Delete Account");
        accountCreateP.checkAccountDeletedMsg("Account Deleted!")

    })

});