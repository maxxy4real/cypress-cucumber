Given(/^I click on the signin link$/, function () {
    cy.get('.login').click()
});

When(/^I click on the signin button$/, function () {
    cy.get('#SubmitLogin > span').click()
});

Given(/^I am on the homepage$/, function () {
    cy.visit('http://automationpractice.com/index.php')
});

Then(/^I log out$/, function () {
    cy.get('.logout').click()
});

Given(/^I enter email "([^"]*)" in the email field$/, function (myemail) {
    cy.get('#email').type(myemail)
});

Given(/^I enter password "([^"]*)" in the password field$/, function (mypassword) {
    cy.get('#passwd').type(mypassword)
});

Then(/^I verify "([^"]*)" on the detail page$/, function (myaccountName) {
    cy.get('.account > span').should('have.text', myaccountName)
});

Then(/^I see "([^"]*)" message displayed$/, function (errorMessage) {
    cy.get('ol > li').should('have.text', errorMessage)
});