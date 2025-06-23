Feature: The Calculator

  I want to open Calculator page

  Scenario: Opening a Calculator page
    Given I open Calculator page
    Then Check numbers are on canvas
    And Check symbols are on canvas
