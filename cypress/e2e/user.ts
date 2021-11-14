// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    const user = createUser()
    cy.visit('/sign-up')
    cy.signUp(user)
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })

  it.only('should sign in and sign out', () => {
    cy.visit('/sign-in')
    cy.signIn()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText('teste').click()
    cy.findByRole('button', { name: /sign out/i }).click()
    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText('teste').should('not.exist')
  })
})
