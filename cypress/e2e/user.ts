// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it.skip('should sign up', () => {
    const user = createUser()
    cy.visit('/sign-up')
    cy.signUp(user)
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it.skip('should sign in and sign out', () => {
    cy.visit('/sign-in')
    cy.signIn()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText('teste').click()
    cy.findByRole('button', { name: /sign out/i }).click()
    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText('teste').should('not.exist')
  })

  it('should sign in and redirect the user when they access a protected route', () => {
    cy.visit('/profile/me')
    cy.location('href').should(
      'eq',
      `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`
    )
    cy.signIn()
    cy.url().should('eq', `${Cypress.config().baseUrl}/profile/me`)
    cy.findByText('teste').should('exist')
    cy.findByLabelText(/username/i).should('have.value', 'teste')
    cy.findByLabelText(/e-mail/i).should('have.value', 'teste@email.com')
  })
})
