@Login
Feature: Login

  Scenario Outline: As a user I want to login successfully
    Given I am on the home page
    And I click on the signin link
    And I enter email "<myemail>" in the email field
    And I enter password "<mypassword>" in the password field
    When I click on the signin button
    Then I verify "<expectedName>" on my detail page
    And I log out

    Examples:
      | myemail                 | mypassword | expectedName  |
      | maxtesting6+2@gmail.com | Today01    | Mike Davies   |
      | laura@gmail.com         | Monday01   | Laura Martha  |
