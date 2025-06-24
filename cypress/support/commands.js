Cypress.Commands.add('login', (login, password) => {
  cy.visit('/login');
  cy.get('#sdo-login').type(login);
  cy.get('#sdo-password').type(password);
  cy.contains('button', 'Войти').click();
  cy.url().should('not.include', '/login');
});