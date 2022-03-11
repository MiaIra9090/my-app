/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  return {
    ...config,
    baseUrl: 'http://localhost:3000',
    video: true,
  };
};
