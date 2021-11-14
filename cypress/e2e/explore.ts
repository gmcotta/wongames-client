// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

import {
  genreFields,
  platformFields,
  sortFields,
  priceFields
} from '../../src/utils/filter/fields'

const selectFilterAndCheckIfFirstGameCardPriceIsLessThan = (price: number) => {
  cy.findByText(`Under $${price}`).click()
  cy.location('href').should('contain', `price_lte=${price}`)
  cy.getByDataCy('game-card')
    .first()
    .within(() => {
      cy.shouldPriceBeLessThan(price)
    })
}

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

  it('should sort by price', () => {
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

  it('should filter by price', () => {
    cy.findByText(/Highest to lowest/i).click()
    cy.findByText(/free/i).click()
    cy.location('href').should('contain', 'price_lte=0')
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText(/free/i).should('exist')
      })
    selectFilterAndCheckIfFirstGameCardPriceIsLessThan(50)
    selectFilterAndCheckIfFirstGameCardPriceIsLessThan(100)
    selectFilterAndCheckIfFirstGameCardPriceIsLessThan(150)
    selectFilterAndCheckIfFirstGameCardPriceIsLessThan(250)
    selectFilterAndCheckIfFirstGameCardPriceIsLessThan(500)
  })

  it('should filter by platform', () => {
    cy.findByText(/windows/i).click()
    cy.location('href').should('contain', 'platforms=windows')
    cy.findByText(/windows/i).click()
    cy.findByText(/linux/i).click()
    cy.location('href').should('contain', 'platforms=linux')
    cy.findByText(/linux/i).click()
    cy.findByText(/mac os/i).click()
    cy.location('href').should('contain', 'platforms=mac')
    cy.findByText(/mac os/i).click()
  })

  it('should filter by genre', () => {
    cy.findByText(/action/i).click()
    cy.location('href').should('contain', 'categories=action')
    cy.findByText(/action/i).click()

    cy.findByText(/adventure/i).click()
    cy.location('href').should('contain', 'categories=adventure')
    cy.findByText(/adventure/i).click()

    cy.findByText(/sports/i).click()
    cy.location('href').should('contain', 'categories=sports')
    cy.findByText(/sports/i).click()

    cy.findByText(/puzzle/i).click()
    cy.location('href').should('contain', 'categories=puzzle')
    cy.findByText(/puzzle/i).click()

    cy.findByText(/horror/i).click()
    cy.location('href').should('contain', 'categories=horror')
    cy.findByText(/horror/i).click()

    cy.findByText(/^platform$/i).click()
    cy.location('href').should('contain', 'categories=platform')
    cy.findByText(/^platform$/i).click()

    cy.findByText(/fantasy/i).click()
    cy.location('href').should('contain', 'categories=fantasy')
    cy.findByText(/fantasy/i).click()

    cy.findByText(/^rpg/i).click()
    cy.location('href').should('contain', 'categories=role-playing')
    cy.findByText(/^rpg/i).click()

    cy.findByText(/^jrpg/i).click()
    cy.location('href').should('contain', 'categories=jrpg')
    cy.findByText(/^jrpg/i).click()

    cy.findByText(/simulation/i).click()
    cy.location('href').should('contain', 'categories=simulation')
    cy.findByText(/simulation/i).click()

    cy.findByText(/strategy/i).click()
    cy.location('href').should('contain', 'categories=strategy')
    cy.findByText(/strategy/i).click()

    cy.findByText(/shooter/i).click()
    cy.location('href').should('contain', 'categories=shooter')
    cy.findByText(/shooter/i).click()
  })

  it.only('should return empty if no games were found', () => {
    cy.findByText(/mac os/i).click()
    cy.findByText(/sports/i).click()
    cy.getByDataCy('game-card').should('not.exist')
    cy.findByRole('heading', { name: /ooops/i }).should('exist')
    cy.findByText(/we didn't find any games with this filter/i)
  })
})
