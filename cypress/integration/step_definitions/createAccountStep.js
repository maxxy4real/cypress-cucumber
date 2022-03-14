import {createAcct} from "./page-object/createAccountPage";

const {Given, When, Then} = require("cucumber");

Given(/^I click on create account button$/, function () {
    createAcct.clickCreateAccountBtn()

});

Given(/^I selwct for myself$/, function () {
    createAcct.clickForMyself()

});
When(/^I verify my phone number$/, function () {
    createAcct.enterPhoneNumber()

});
Given(/^I enter my first name in the first name field$/, function () {
    createAcct.enterFirstName()

});
Given(/^I enter my last name in the last name field$/, function () {
    createAcct.enterLastName()

});
Given(/^I enter username in the username field$/, function () {
    createAcct.enterUserName()

});
Given(/^I type password in the password field$/, function () {
    createAcct.enterPassword()

});
Given(/^I confirm the password$/, function () {
    cy.contains('ConfirmPasswd').type('Mond@y01')
    cy.get('#code').type('G-523372')
    cy.contains('Verify').click()

});
Then(/^I enter my date of birth$/, function () {
    cy.get('#day').type('01')
    cy.get('#month').select('January')
    cy.get('#year').type('2000')

});
Then(/^I select my gender$/, function () {
    createAcct.selectGender()

});
Then(/^I click yes I'm in button$/, function () {
    cy.contains('Yes, I’m in').click()

});
When(/^I choose express personalization$/, function () {
    createAcct.choosePersonalizationOptn()

});
Then(/^I click on confirm button$/, function () {
    createAcct.clickConfirmBtn()

});
Then(/^I click I agree button$/, function () {
    createAcct.clickAgreeBtn()

});