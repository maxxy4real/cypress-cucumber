Feature: Create account

  Scenario: As a new user I want to create account successfully
    Given I am on the home page
    And I click on the signin link
    And I enter email "glotaj98@gmail.com" in the email address field
    When I click on the create an account button
    And I click on the Mr button
    And I type name in the name field
    And I type password in the password field
    And I choose day of birth
    And I enter street name in the address field
    And I enter city in the city field
    And I choose state
    And I enter Zip/Postal Code in the postal field
    And I enter cell number in the mobile phone field
    Then I click register button
    And I welcome to your account displayed

