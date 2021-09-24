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
    cy.get('.bankwire').click()
});

When(/^I click confirm order$/, function () {
    cy.get('#cart_navigation > .button > span').click()

});
Then(/^I verify order is complete and successful$/, function () {
    cy.get('.box').contains('Your order on My Store is complete.')

});

Given(/^I am on the homepage$/, function () {
    cy.visit('http://automationpractice.com/index.php')

});
Given(/^I type dress in the search field$/, function () {
    cy.get('#search_query_top').type('dress')


});
When(/^I click on the search icon$/, function () {
    cy.get('#searchbox > .btn').click()

});
Then(/^I verify that product page is displayed$/, function () {
     cy.get('.page-heading').should('be.visible')

});

// Given(/^I am on the home page$/, function () {
//     cy.visit('http://automationpractice.com/index.php')
//
// });
Given(/^I leave the search field blank$/, function () {
    cy.get('#search_query_top')

});
When(/^I click the search icon$/, function () {
    cy.get('#searchbox > .btn').click()

});
Then(/^I verify that Please enter a search keyword is displayed$/, function () {
    cy.get('.alert').should('be.visible')

});
// Given(/^I am on the home page$/, function () {
//     cy.visit('http://automationpractice.com/index.php')
//
// });
Given(/^I type asdfghjkl in the search field$/, function () {
    cy.get('#search_query_top').type('asdfghjkl')

});

When(/^I click the search icon$/, function () {
    cy.get('#searchbox > .btn').click()
});
Then(/^I verify that no results for your search were displayed$/, function () {
    cy.get('.alert').should('be.visible')

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
Then(/^I verify "([^"]*)" on my detail page$/, function (expectedName) {
    cy.get('.account > span').should('have.text', expectedName)
});