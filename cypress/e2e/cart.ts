// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove games from cart from game card', () => {
    cy.visit('/')
    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
        cy.findByRole('button', { name: /remove from cart/i }).should('exist')
      })
    cy.getByDataCy('game-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
        cy.findByRole('button', { name: /remove from cart/i }).should('exist')
      })
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', '2')
    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()
    cy.getByDataCy('game-item').should('have.length', 2)
    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click({
          force: true
        })
        cy.findByRole('button', { name: /add to cart/i }).should('exist')
      })
    cy.getByDataCy('game-card')
      .eq(1)
      .within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click({
          force: true
        })
        cy.findByRole('button', { name: /add to cart/i }).should('exist')
      })
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
