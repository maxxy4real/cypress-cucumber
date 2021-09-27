Given(/^I click on the forgot password link$/, function () {
    cy.get('.lost_password > a').click()
});

When(/^I click on Retrieve password button$/, function () {
    cy.get('.submit > .btn > span').click()
})

Then(/^I see confirmation message displayed$/, function () {
    cy.get('.alert').should('be.visible')
});

Then(/^I see password "([^"]*)" displayed$/, function (messageError) {
    cy.get('ol > li').should('have.text', messageError)

});