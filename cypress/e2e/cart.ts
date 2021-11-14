// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove games from cart from game card', () => {
    cy.visit('/')
    cy.addToCartByIndex(0)
    cy.addToCartByIndex(1)
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', '2')
    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()
    cy.getByDataCy('game-item').should('have.length', 2)
    cy.removeFromCartByIndex(0)
    cy.removeFromCartByIndex(1)
    cy.findAllByLabelText(/cart items/i).should('not.exist')
    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click({ force: true })
    cy.findByRole('heading', {
      name: /your cart is empty/i,
      hidden: true
    }).should('exist')
    cy.findByText(/go back to store/i).should('exist')
  })
})
