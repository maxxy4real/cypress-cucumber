Feature: Checkout

  Scenario: As a user I want to checkout successfully
    Given I am on the home page
    And I click on the signin link
    And I enter email "maxtesting6+2@gmail.com" in the email field
    And I enter password "Today01" in the password field
    When I click on the signin button
    And I search for dress
    And I add item to cart
    And proceed to checkout
    And I accept terms and conditions and proceed to checkout
    And I choose check as payment method
    And I click confirm order
    Then I verify order is complete and successful
    And I log out