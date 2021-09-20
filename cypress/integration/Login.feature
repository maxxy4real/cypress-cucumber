Feature: Login

  Scenario: As a user I want to login successfully
    Given I am on the home page
    And I click on the signin link
    And I enter my email adress
    And I enter my password
    When I click on the signin button
    Then I verify that I am logged in successfully
    And I log out
