const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('the user navigates to the homepage', () => {
  cy.visit('/');
});

When('the user clicks on the header link {string}', () => {
  cy.get('a[href="/bokning/6523d4e91451567f3ed4cebf"]').click();
});

When('the user selects a movie, date, and seats', () => {
  cy.get('.dropdown-container:nth-child(3) select').select('Parasit');
  cy.wait(2000);
  cy.get('.dropdown-container:nth-child(4) select').select('Vecka 49');
  cy.wait(2000);
  cy.get('.dropdown-container:nth-child(5) select').select('652e99d0abf116825cc87218');
  cy.wait(3000);
  cy.get('.ticket-counter-container')
    .contains('Vuxenbiljetter')
    .next('.plus-minus-container')
    .find('.ticket-counter-arrow-plus')
    .click()
    .click();
});

When('the user tries to select an already booked seat', () => {
  cy.wait(3000);
  cy.get('#\\33').click(); // Assuming you're still using this ID selector
});

Then('the user should not be able to select the already booked seat', () => {
  cy.get('.book-button').click();
});

Then('a screen with the message {string} should be displayed', (message) => {
  cy.wait(3000); // Assuming this wait is for the alert to appear
  cy.get('#alertMessage').contains(message).should('be.visible');
});

Then('a message should appear stating, {string}', (message) => {
  cy.wait(3000); // Assuming this wait is for the alert to appear
  cy.get('#alertMessage').contains(message).should('be.visible');
});
