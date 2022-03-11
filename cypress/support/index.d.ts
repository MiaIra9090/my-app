/// <reference types="Cypress" />

declare namespace Cypress {
  interface Chainable {
    getRoutes(): Promise<Routes>;

    getByTestId(query: string): Cypress.Chainable<Element>;
  }
}

interface Routes {
  repositories: string;
  issues: string;
}
