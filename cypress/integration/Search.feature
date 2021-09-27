Feature: Search

  Background:
    Given I am on the homepage

  Scenario: As a user I want to search successfully
    And I type dress in the search field
    When I click on the search icon
    Then I verify that product page is displayed

  Scenario: As a user I want to understand system behavior when I leave the search field blank
    And I leave the search field blank
    When I click the search icon
    Then I verify that Please enter a search keyword is displayed

  Scenario: As a user I want to understand system behavior when I type invalid search keyword
    And I type asdfghjkl in the search field
    When I click the search icon
    Then I verify that no results for your search were displayed
