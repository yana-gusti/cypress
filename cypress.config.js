const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    e2e: {
        pageLoadTimeout: 120000, // Increase timeout to 2 minutes
        baseUrl: "https://www.google.com", // optional if using cy.visit("/")
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            return config;
        },
        specPattern: "cypress/e2e/**/*.feature",
        supportFile: "cypress/support/e2e.js", // <- explicitly defined (optional)
    },
});
