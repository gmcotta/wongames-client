// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

import { createUser, User } from '../support/generate'

describe('Checkout', () => {
  let user: User

  describe('Free Games', () => {
    before(() => {
      user = createUser()
    })
    it('should buy free game', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)
      cy.findAllByRole('link', { name: /explore/i })
        .first()
        .click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)
      cy.findByText(/free/i).click()
      cy.location('href').should('contain', 'price_lte=0')
      cy.addToCartByIndex(0)
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', '1')
        .click()
      cy.getByDataCy('game-item')
        .eq(0)
        .within(() => {
          cy.findByText(/free/i).should('exist')
        })
      cy.findByText(/buy now/i).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/cart`)
      cy.getByDataCy('game-item')
        .eq(0)
        .within(() => {
          cy.findByText(/free/i).should('exist')
        })
      cy.findByRole('button', { name: /buy now/i }).click()

      cy.location('href').should('eq', `${Cypress.config().baseUrl}/success`)
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })
    it.skip('should show game order', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )
      cy.signIn({
        username: user.username,
        email: user.email,
        password: user.password
      })
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )
      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
  describe('Paid Games', () => {
    before(() => {
      user = createUser()
    })
    it('should buy paid game', () => {
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)
      cy.findAllByRole('link', { name: /explore/i })
        .first()
        .click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)
      cy.findByText(/highest to lowest/i).click()
      cy.location('href').should('contain', 'sort=price%3Adesc')
      cy.addToCartByIndex(0)
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', '1')
        .click()
      cy.findByText(/buy now/i).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/cart`)
      cy.findByRole('button', { name: /buy now/i }).should(
        'have.attr',
        'disabled'
      )
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '0424')
      cy.fillElementsInput('cardCvc', '424')
      cy.findByRole('button', { name: /buy now/i }).click()

      cy.location('href').should('eq', `${Cypress.config().baseUrl}/success`)
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })
    it.skip('should show game order', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )
      cy.signIn({
        username: user.username,
        email: user.email,
        password: user.password
      })
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )
      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
