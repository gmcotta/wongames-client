// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'
import 'cypress-plugin-stripe-elements'

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args)
})

Cypress.Commands.add('shouldRenderBanner', () =>
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /the elder scrolls iv: oblivion/i })
    cy.findByRole('link', { name: /buy now/i })
    cy.get('.slick-dots > :nth-child(2) > button').click()
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500)
    cy.findByRole('heading', { name: /kenshi/i })
    cy.findByRole('link', { name: /buy now/i })
  })
)

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) =>
  cy.getByDataCy(`"${name}"`).within(() => {
    cy.findByRole('heading', { name }).should('exist')
    cy.getByDataCy('highlight').should(highlight ? 'exist' : 'not.exist')
    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }
    cy.getByDataCy('game-card').should('have.length.gt', 0)
  })
)

Cypress.Commands.add('searchForFields', (fields) => {
  fields.map(({ label }) => {
    cy.findByText(label).should('exist')
  })
})

Cypress.Commands.add('shouldPriceBeGreaterThan', (value) => {
  return cy
    .findByText(/^\$\d+\.\d{2}/)
    .invoke('text')
    .then(($el) => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.gt', value)
})

Cypress.Commands.add('shouldPriceBeLessThan', (value) => {
  return cy
    .findByText(/^\$\d+\.\d{2}/)
    .invoke('text')
    .then(($el) => $el.replace('$', ''))
    .then(parseFloat)
    .should('be.lt', value)
})

Cypress.Commands.add('signUp', (user) => {
  cy.findByPlaceholderText(/username/i).type(user.username)
  cy.findByPlaceholderText(/email/i).type(user.email)
  cy.findByPlaceholderText(/^password/i).type(user.password)
  cy.findByPlaceholderText(/^confirm password/i).type(user.password)
  cy.findByRole('button', { name: /sign up now/i }).click()
})

Cypress.Commands.add(
  'signIn',
  (
    user = { username: 'teste', email: 'teste@email.com', password: '1234' }
  ) => {
    cy.findByPlaceholderText(/email/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByRole('button', { name: /sign in now/i }).click()
  }
)

Cypress.Commands.add('addToCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click({ force: true })
      cy.findByRole('button', { name: /remove from cart/i }).should('exist')
    })
})

Cypress.Commands.add('removeFromCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click({
        force: true
      })
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })
})

Cypress.Commands.add('addToWishlistByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByLabelText(/add to wishlist/i).click({
        force: true
      })
      cy.findByLabelText(/remove from wishlist/i).should('exist')
    })
})

Cypress.Commands.add('removeFromWishlistByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByLabelText(/remove from wishlist/i).click({
        force: true
      })
      cy.findByLabelText(/add to wishlist/i).should('exist')
    })
})
