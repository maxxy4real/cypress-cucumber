Feature: Search

  Background:
    Given I am on the home page

  Scenario Outline: As a user I want to understand search behavior
    And I type "<searchword>" in the search field
    When I click on the search icon
    Then I verify "<searchresult>" displayed


    Examples:
    | searchword    | searchresult                 |
    | dress         | 7 results have been found.   |
    | asdfhjkl      | 0 results have been found.   |


