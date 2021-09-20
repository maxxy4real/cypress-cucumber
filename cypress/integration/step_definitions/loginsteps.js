Given(/^I am on the home page$/, function () {
    cy.visit('http://automationpractice.com/index.php')
});

Given(/^I click on the signin link$/, function () {
    cy.get('.login').click()
});
Given(/^I enter my email adress$/, function () {
    cy.get('#email').type('maxtesting6+2@gmail.com')
});

Given(/^I enter my password$/, function () {
    cy.get('#passwd').type('Today01')
});

When(/^I click on the signin button$/, function () {
    cy.get('#SubmitLogin > span').click()
});

Then(/^I verify that I am logged in successfully$/, function () {
    cy.get('.account > span').should('have.text', 'Mike Davies')
});

Then(/^I log out$/, function () {
    cy.get('.logout').click()
});