import getRepos, { gerRepoList } from 'api/mocks/repos';
import getIssues from 'api/mocks/issues';

describe('Check repo search', () => {
  beforeEach(() => {
    cy.server();
    cy.getRoutes().then((routes) => {
      cy.visit(routes.repositories);
    });
  });
  it('Check repo search with no item', () => {
    cy.getByTestId('search_button').should('be.disabled');
    cy.getByTestId('warning_text').contains('Please, type repository name').should('exist');
    cy.getByTestId('search_input').type('bootstrap');
    cy.getByTestId('search_button').should('not.be.disabled');
    cy.route({
      method: 'get',
      status: 200,
      url: `https://api.github.com/search/repositories?q=*&page=1&per_page=9`,
      response: getRepos(),
    }).as('loadRepos');
    cy.getByTestId('search_button').click();
    cy.wait('@loadRepos');
    cy.getByTestId('warning_text').contains('Not found').should('exist');
  });
  it('Check repo search with items', () => {
    cy.getByTestId('search_button').should('be.disabled');
    cy.getByTestId('warning_text').contains('Please, type repository name').should('exist');
    cy.getByTestId('search_input').type('bootstrap');
    cy.get('input[name=search_repository]').should('have.value', 'bootstrap')
    cy.getByTestId('search_button').should('not.be.disabled');
    cy.route({
      method: 'get',
      status: 202,
      url: `https://api.github.com/search/repositories?q=*&page=1&per_page=9`,
      response: getRepos(gerRepoList()),
    }).as('loadRepos');
    cy.getByTestId('search_button').click();
    cy.wait('@loadRepos');
    cy.getByTestId('warning_text').should('not.exist');
    cy.getByTestId('card_2126244').should('exist');
    cy.getByTestId('details_2126244').click();
    cy.getByTestId('more_2126244').click();
    cy.getByTestId('card_modal').should('exist');
    cy.getByTestId('actual_githib_link')
      .invoke('attr', 'href')
      .should('contain', 'https://github.com/twbs/bootstrap');
    cy.get('#2126244_close').click();
    cy.getByTestId('card_modal').should('not.exist');
    cy.getByTestId('details_2126244').click();

    cy.route({
      method: 'get',
      status: 200,
      url: `https://api.github.com/repos/twbs/bootstrap/issues?state=all`,
      response: getIssues(),
    }).as('loadIssues');

    cy.getByTestId('issues_2126244').click();
    cy.wait('@loadIssues');
    cy.url().should('include', '/issues/2126244');
    cy.getByTestId('tab_button_all').invoke('attr', 'class').should('contain', 'style_activeTab');
    cy.getByTestId('tab_button_open');
    cy.getByTestId('issue_1166471960').should('exist');
    cy.getByTestId('issue_1165556469').should('exist');
    cy.getByTestId('tab_button_open').click();
    cy.getByTestId('issue_1166471960').should('exist');
    cy.getByTestId('issue_1165556469').should('not.exist');
    cy.getByTestId('tab_button_closed').click();
    cy.getByTestId('issue_1166471960').should('not.exist');
    cy.getByTestId('issue_1165556469').should('exist');
    cy.getByTestId('go_back_btn').click();
    cy.url().should('not.include', '/issues/2126244');
    cy.get('input[name=search_repository]').should('have.value', 'bootstrap');
  });
});
