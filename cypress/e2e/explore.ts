// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />
import {
  genreFields,
  platformFields,
  sortFields,
  priceFields
} from '../../src/utils/filter/fields'
describe('Explore Page', () => {
  it('should render filter columns', () => {
    cy.visit('/games')
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.searchForFields(sortFields)
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.searchForFields(priceFields)
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.searchForFields(platformFields)
    cy.findByRole('heading', { name: /genres/i }).should('exist')
    cy.searchForFields(genreFields)
  })
})
