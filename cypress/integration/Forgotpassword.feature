Feature: forgot password

  Background:
    Given I am on the home page
    And I click on the signin link
    And I click on the forgot password link

  Scenario Outline: As a user I want to request for new password successfully
    And I enter email "<myemail>" in the email field
    And I click on Retrieve password button
    Then I see confirmation message displayed

    Examples:
      | myemail               |
      | glow4life@gmail.com   |
      | aji4real@gmail.com    |

  Scenario Outline: Check for error message when I attempt retrieve password with incorrect details
    And I enter email "<myemail>" in the email field
    When I click on Retrieve password button
    Then I see "<messageError>"

    Examples:
      | myemail            | messageError                                          |
      | glotaj98@gamil.com | There is no account registered for this email address.|
      | glotaj98gmail.com  | Invalid email address.                                 |

