/// <reference types="cypress" />

type Field = {
  label: string
  name: string | number
}

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

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
    /**
     * Custom command to get data-cy attribute
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>
    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(
      attrs: ShowcaseAttributes
    ): Chainable<JQuery<HTMLElement>>
    /**
     * Custom command to search for fields
     * @example cy.searchForFields(priceFields)
     */
    searchForFields(fields: Field[]): void
  }
}
