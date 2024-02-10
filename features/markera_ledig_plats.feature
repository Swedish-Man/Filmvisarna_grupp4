Feature: Highlights available seats to book when clicked

  As a user i want to be able to see what seats i have currently selected on the booking page

  Scenario: Select seats that are available
    Given I am on the booking page
    When I select seat 1
    And I select seat 2
    And both seats are available
    Then seat 1 should be marked as selected
    And seat 2 should be marked as selected
    When I book the seats
    Then the seats should be booked