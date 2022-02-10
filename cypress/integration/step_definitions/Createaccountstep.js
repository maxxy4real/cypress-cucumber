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