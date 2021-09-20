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
When(/^I search for dress$/, function () {
    cy.get('#search_query_top').type('dress')
    cy.get('#searchbox > .btn').click()
});

When(/^I add item to cart$/, function () {
    cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
});

When(/^proceed to checkout$/, function () {
    cy.get('.button-container > .button-medium > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.cart_navigation > .button > span').click()
});
When(/^I accept terms and conditions and proceed to checkout$/, function () {
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
});

When(/^I choose check as payment method$/, function () {

});
When(/^I click confirm order$/, function () {

});
Then(/^I verify order is complete and successful$/, function () {

});