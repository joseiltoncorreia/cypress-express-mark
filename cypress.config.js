const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    env: {
      apiUrl: 'http://localhost:3333',
      allureResultsPath: 'cypress/reports/allure-results', // Adiciona o caminho dos resultados do Allure
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
