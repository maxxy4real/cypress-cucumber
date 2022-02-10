Feature: forgot password

  Background:
    Given I am on the home page
    And I click on the signin link
    And I click on the forgot password link

  Scenario: As a user I want to request for new password successfully
    And I enter email "glow4life@gmail.com" in the email field
    And I click on Retrieve password button
    Then I see confirmation message displayed
    And I click back to login

  Scenario Outline: Check for error message when I attempt retrieve password with incorrect details
    And I enter email "<myemail>" in the email field
    When I click on Retrieve password button
    Then I see password "<messageError>" displayed

    Examples:
      | myemail            | messageError                                          |
      | glotaj98@gamil.com | There is no account registered for this email address.|
      | glotaj98gmail.com  | Invalid email address.                                |

