import {login} from "./page-object/loginPage";

const {Given, When} = require("cucumber");


Given(/^I enter email "([^"]*)" in the email field$/, function () {
    login.enterEmail("demoenra73@gmail.com")
});

Then(/^I see "([^"]*)" message displayed$/, function (errorMessage) {
   cy.get('.jibhHc').should('have.text', errorMessage)
});


Given(/^I click on use another account$/, function () {
    cy.get('.BHzsHc').click()

});
Given(/^I click next button$/, function () {
    login.clickNextBtn()

});
Given(/^I enter password "([^"]*)" in the password field$/, function () {
    login.enterPassword('Today012')

});
Given(/^I click on next button$/, function () {
    login.clickNextPwdBtn()

});
When(/^I click on the next button$/, function () {
    login.clickNextBtn()

});