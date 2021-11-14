// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    cy.visit('/wishlist')
    cy.signIn()
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/wishlist`)
    cy.findByRole('heading', { name: /Your wishlist is empty/i }).should(
      'exist'
    )
    cy.getByDataCy('"You also will like these games"').within(() => {
      cy.addToWishlistByIndex(0)
      cy.addToWishlistByIndex(1)
    })
    cy.getByDataCy('wishlist-grid').within(() => {
      cy.getByDataCy('game-card').should('have.length', 2)
    })
    cy.getByDataCy('"You also will like these games"').within(() => {
      cy.removeFromWishlistByIndex(0)
      cy.removeFromWishlistByIndex(1)
    })
  })
})
