Feature: Search

  Scenario: As a user I want to search successfully
    Given I am on the homepage
    And I type dress in the search field
    When I click on the search icon
    Then I verify that product page is displayed

  Scenario: As a user I want to understand system behavior when I leave the search field blank
    Given I am on the home page
    And I leave the search field blank
    When I click the search icon
    Then I verify that Please enter a search keyword is displayed

  Scenario: As a user I want to understand system behavior when I type invalid search keyword
    Given I am on the home page
    And I type asdfghjkl in the search field
    When I click the search icon
    Then I verify that no results for your search were displayed
