import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Google page", () => {
    cy.visit("https://www.google.com");
});
