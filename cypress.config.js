const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // env: {
    //   usuario: Cypress.env('usuario') || '050.472.733-85',
    //   senha: Cypress.env('senha') || 'PGbiel93'
    // },
    setupNodeEvents(on, config) {
    },
  },
});
