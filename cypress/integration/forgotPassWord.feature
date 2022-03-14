Feature: forgot password

  Background:
    Given I am on the home page

  Scenario: As a user I want to request for new password successfully
    And I click on demo enra in the sign in page
    When I click on forgot password link
    Then I see account recovery page
    And I click on text button
    And I enter the pin
    When I click on next butto
    Then I create a new password
    And i click on save password link
    And I click continue to Gmail link
    And I verify my account name in my inbox
    And I log out

            |

