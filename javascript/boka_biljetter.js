const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I log in as a user', () => {
  cy.visit('https://filmvisarna-team4.nodehill.se/logga-in');
  cy.get('input[name="mail"]').type('neclatoker35@gmail.com');
  cy.get('input[name="password"]').type('Necla12345');
  cy.get('button.main-btn[type="submit"]').click();
  cy.get('.nav-login-btn').should('exist');
});

Given('I navigate to {string}', (page) => {
  const pages = {
    "the booking page": '/bokning/6523d4e91451567f3ed4cebf',

  };
  cy.visit(pages[page]);
});

Then('I select the movie and date', () => {
  cy.get('.dropdown-container:nth-child(3) select').select('Call me by your name');
  cy.wait(3000);
  cy.get('.dropdown-container:nth-child(4) select').select('Vecka 49');
  cy.wait(3000);
  cy.get('.dropdown-container:nth-child(5) select').select('652e425babf116825cc87204');
  cy.wait(3000);
});

Then('I add tickets and choose seats', () => {
  cy.get(':nth-child(6) > .plus-minus-container > .ticket-counter-arrow-plus').click();
  cy.get('.seats-grid .available').eq(0).click();
  cy.get('.seats-grid .available').eq(1).click();
  cy.get('.seats-grid .available').eq(2).click();
});

When('I click the {string} button to complete the booking', () => {
  cy.get('.book-button').click();
  cy.get('.send-btn').click();
  cy.get('.confirm-btn').click();
  cy.get('.booking-num').should('be.visible');
});

Then('I click the {string} button to logout', () => {
  cy.get('.nav-login-btn').click();
});
