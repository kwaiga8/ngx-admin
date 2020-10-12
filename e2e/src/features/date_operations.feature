Feature: Check date changing

  Scenario: Check basic date picker behaviour
    Given Page is open directly on datepicker screen
    When I click in date time picker named Common Datepicker
    Then I should see calendar with current date


@disabled
  Scenario: Check basic date picker behaviour - FAILING
    Given Page is open directly on datepicker screen
    When I click in date time picker named Datepicker With Range
    And I click in date time picker named Datepicker With Range
    Then I should see calendar pop-up
