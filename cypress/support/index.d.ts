/// <reference types="cypress" />

type Field = {
  label: string
  name: string | number
}

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type User = {
  username: string
  email: string
  password: string
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
    /**
     * Custom command to check if price is greater than a value
     * @example cy.shouldPriceBeGreaterThan(0)
     */
    shouldPriceBeGreaterThan(value: number): Cypress.Chainable<number>
    /**
     * Custom command to check if price is less than a value
     * @example cy.shouldPriceBeLessThan(500)
     */
    shouldPriceBeLessThan(value: number): Cypress.Chainable<number>
    /**
     * Custom command to sign up an user
     * @example cy.signUp(user)
     */
    signUp(user: User): void
    /**
     * Custom command to sign in an user
     * @example cy.signIn(user)
     */
    signIn(user?: User): void
  }
}
