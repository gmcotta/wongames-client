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
      // cy.findByRole('button', { name: /add to wishlist/i }).should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
      cy.findAllByRole('button', { name: /thumbnail -/i }).should(
        'have.length.gt',
        0
      )
    })
  })
})
