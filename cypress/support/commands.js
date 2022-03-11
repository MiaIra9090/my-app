Cypress.Commands.add('getRoutes', () => {
  return cy.fixture('routes.json');
});

Cypress.Commands.add('getByTestId', (name) => cy.get(`[data-testid=${name}]`));
