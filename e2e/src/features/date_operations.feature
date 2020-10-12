Feature: Check date changing

  Scenario: Make changes to date
    Given Page is open directly on datepicker screen
    When I click in date time picker named Common Datepicker
    Then I should see calendar pop-up
