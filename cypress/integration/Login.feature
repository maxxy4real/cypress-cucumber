Feature: Login

  Background:
    Given I am on the home page
    And I click on use another account

  Scenario: As a user I want to login successfully
    And I enter email "demoenra73@gmail.com" in the email field
    And I click next button
    And I enter password "Today012" in the password field
    And I click on next button
    Then I verify "<myaccountName>" on the detail page
    And I log out



  Scenario Outline: Check error message with incorrect details
    And I enter email "<myemail>" in the email field
    When I click on the next button
    Then I see "<errorMessage>" message displayed

    Examples:
      | myemail          | errorMessage                       |
      | tommmy@gmail.com | Couldn't find your Google account. |
      | marksgmail.com   | Couldn't find your Google account. |

