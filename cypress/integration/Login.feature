Feature: Login

  Background:
    Given I am on the home page
    And I click on the signin link

  Scenario Outline: As a user I want to login successfully
    And I enter email "<myemail>" in the email field
    And I enter password "<mypassword>" in the password field
    When I click on the signin button
    Then I verify "<myaccountName>" on the detail page
    And I log out

    Examples:
    | myemail                 | mypassword     | myaccountName |
    | maxtesting6+2@gmail.com | Today01        | Mike Davies   |
    | laura@gmail.com         | Monday01       | Laura Martha  |


  Scenario Outline: Check error message with incorrect details
    And I enter email "<myemail>" in the email field
    And I enter password "<mypassword>" in the password field
    When I click on the signin button
    Then I see "<errorMessage>" message displayed

    Examples:
      | myemail        | mypassword     | errorMessage           |
      | mark@gmail.com | Today01        | Authentication failed. |
      | marksgmail.com | Monday01       | Invalid email address. |
