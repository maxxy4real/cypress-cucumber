When(/^I search for dress$/, function () {
    cy.get('#search_query_top').type('dress')
    cy.get('#searchbox > .btn').click()
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

Then(/^I verify that no results for your search were displayed$/, function () {
    cy.get('.alert').should('be.visible')

});