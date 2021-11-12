/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit Google
     * @example cy.google()
     */
    google(): Chainable<Window>
    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<JQuery<HTMLElement>>
  }
}
