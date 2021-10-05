import {login} from "./page-object/loginpage";

Given(/^I click on the signin link$/, function () {
    login.clickSignIn()
});

Given(/^I enter email "([^"]*)" in the email field$/, function (myemail) {
    login.enterEmail(myemail)
});

Given(/^I enter password "([^"]*)" in the password field$/, function (mypassword) {
    login.enterPassword(mypassword)
});

When(/^I click on the signin button$/, function () {
    login.clickSignBtn()
});

Then(/^I see "([^"]*)" message displayed$/, function (errorMessage) {
    cy.get('ol > li').should('have.text', errorMessage)
});