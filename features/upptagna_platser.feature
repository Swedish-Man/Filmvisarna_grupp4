Feature: Unavailable seats

  As a user I should not be able to book a seat that is already booked by someone else.


 Scenario: Display booked seats
Given the user navigates to the homepage
When the user clicks on the "BOOK" header
And selects a movie, date, and seats
And attempts to select a seat already reserved
Then the user should be prevented from choosing the occupied seat
And a message should appear stating, "Please select the same number of seats as tickets."

