import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("the title should contain {string}", (text) => {
    cy.title().should("include", text);
});
