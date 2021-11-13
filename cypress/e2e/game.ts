// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/sable')
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /sable/i }).should('exist')
      cy.findByText(
        /Embark on a unique and unforgettable journey and guide Sable through her Gliding/i
      ).should('exist')
      cy.findByText(/\$47.49/i).should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })
    cy.findAllByRole('button', { name: /thumbnail -/i }).should(
      'have.length.gt',
      0
    )
    cy.getByDataCy('text-content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })
    cy.getByDataCy('text-content').children().should('have.length.at.least', 2)
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByText(/Shedworks/i).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByText(/Sep 21, 2021/i).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByTitle(/windows/i).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByText(/Raw Fury/i).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByText(/FREE/i).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')
      cy.findByText(/Adventure \/ Puzzle/i).should('exist')
    })
    cy.shouldRenderShowcase({
      name: 'Upcoming games',
      highlight: true
    })
    cy.shouldRenderShowcase({
      name: 'You also will like these games',
      highlight: false
    })
  })
})
