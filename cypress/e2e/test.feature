Feature: The Google

  I want to open Google page

  Scenario: Opening a Google network page
    Given I open Google page
    Then the title should contain "Google"
