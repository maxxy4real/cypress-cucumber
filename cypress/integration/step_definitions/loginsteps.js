Given(/^I am on the home page$/, function () {
    cy.visit('http://automationpractice.com/index.php')
});

Given(/^I click on the signin link$/, function () {
    cy.get('.login').click()
});

When(/^I click on the signin button$/, function () {
    cy.get('#SubmitLogin > span').click()
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

Given(/^I type dress in the search field$/, function () {
    cy.get('#search_query_top').type('dress')

});

When(/^I click on the search icon$/, function () {
    cy.get('#searchbox > .btn').click()

});

Then(/^I verify that product page is displayed$/, function () {
     cy.get('.page-heading').should('be.visible')

});

Given(/^I leave the search field blank$/, function () {
    cy.get('#search_query_top')

});

When(/^I click the search icon$/, function () {
    cy.get('#searchbox > .btn').click()

});

Then(/^I verify that Please enter a search keyword is displayed$/, function () {
    cy.get('.alert').should('be.visible')

});

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

Then(/^I verify "([^"]*)" on the detail page$/, function (myaccountName) {
    cy.get('.account > span').should('have.text', myaccountName)
});

Then(/^I see "([^"]*)" message displayed$/, function (errorMessage) {
    cy.get('ol > li').should('have.text', errorMessage)
});

Given(/^I click on the forgot password link$/, function () {
    cy.get('.lost_password > a').click()

});

When(/^I click on Retrieve password button$/, function () {
    cy.get('.submit > .btn > span').click()

})

Then(/^I see confirmation message displayed$/, function () {
    cy.get('.alert').should('be.visible')

});
Given(/^I click on forgot password link$/, function () {
    cy.get('.lost_password > a').click()

});
Then(/^I see "([^"]*)"$/, function (messageError) {
    cy.get('ol > li').should('have.text', messageError)

});
When(/^I click on the create an account button$/, function () {
    cy.get('#SubmitCreate > span').click()
});
Given(/^I enter email "([^"]*)" in the email address field$/, function () {
    cy.get('#email_create').type('glota@agmail.com')

});
When(/^I click on the Mr button$/, function () {
    cy.get('#id_gender1').click()
});
When(/^I type name in the name field$/, function () {
    cy.get('#customer_firstname').type('Glory')
    cy.get('#customer_lastname').type('Tope')

});
When(/^I type password in the password field$/, function () {
    cy.get('#passwd').type('N@me01234')

});
When(/^I choose day of birth$/, function () {
    cy.get('#days').select('5')
    cy.get('#months').select('February')
    cy.get('#years').select('1991')

});

When(/^I enter city in the city field$/, function () {
    cy.get('#city').type('Gloucester')

});
When(/^I choose state$/, function () {
    cy.get('#id_state').select('Maryland')

});
When(/^I enter Zip\/Postal Code in the postal field$/, function () {
    cy.get('#postcode').type('20850')

});

When(/^I enter cell number in the mobile phone field$/, function () {
    cy.get('#phone_mobile').type('07459519083')

});
Then(/^I click register button$/, function () {
    cy.get('#submitAccount > span').click()

});

When(/^I enter street name in the address field$/, function () {
    cy.get('#address1').type('KingsBarton')

});
Then(/^I welcome to your account displayed$/, function () {
    cy.get('.info-account').contains('Welcome to your account. Here you can manage all of your personal information and orders.')

});