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
    cy.get('.bankwire').click()
});

When(/^I click confirm order$/, function () {
    cy.get('#cart_navigation > .button > span').click()
});

Then(/^I verify order is complete and successful$/, function () {
    cy.get('.box').contains('Your order on My Store is complete.')

});
When(/^I search for dress$/, function () {
    cy.get('#search_query_top').type('dress')
    cy.get('#searchbox > .btn').click()

});