Feature: See information about specific movie

  I want to be able to navigate to a webpage that has details about a specific movie.

  Scenario: View details for a selected movie
    Given the user is on the homepage
    When the user clicks on the "Visningar" button
    And selects a movie title
    Then the user should be presented with details about the chosen movie