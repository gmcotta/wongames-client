// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />
import {
  genreFields,
  platformFields,
  sortFields,
  priceFields
} from '../../src/utils/filter/fields'
describe('Explore Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filter columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.searchForFields(sortFields)
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.searchForFields(priceFields)
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.searchForFields(platformFields)
    cy.findByRole('heading', { name: /genres/i }).should('exist')
    cy.searchForFields(genreFields)
  })

  it('should render 15 games and show 30 games when show more button is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  })

  it.only('should sort by price', () => {
    cy.findByText(/Lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText(/free/i).should('exist')
      })
    cy.findByText(/Highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldPriceBeGreaterThan(0)
      })
  })
})
