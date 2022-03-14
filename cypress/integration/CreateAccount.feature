Feature: Create account

  Scenario: As a new user I want to create account successfully
    Given I am on the home page
    And I click on use another account
    And I click on create account button
    And I selwct for myself
    And I enter my first name in the first name field
    And I enter my last name in the last name field
    And I enter username in the username field
    And I type password in the password field
    And I confirm the password
    When I click on next butto
    And I verify my phone number
    Then I click on next button
    And I enter my date of birth
    And I select my gender
    And I click on next butto
    And I click yes I'm in button
    When I choose express personalization
    Then I click on next butto
    And I click on confirm button
    And I click I agree button
    And I verify "<myaccountName>" on the detail page

