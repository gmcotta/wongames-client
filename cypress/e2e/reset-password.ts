// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Reset password', () => {
  it('should return error message if password confirmation does not match', () => {
    cy.visit('/reset-password?code=lksdjlaskj')
    cy.findByPlaceholderText(/^password/i).type('123123')
    cy.findByPlaceholderText(/^confirm password/i).type('387192')
    cy.findByRole('button', { name: /reset password/i }).click()
    cy.findByText(/confirm password does not match with password/i).should(
      'exist'
    )
  })

  it('should return error message if code is invalid', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: '400',
        body: {
          error: 'Bad request',
          message: [
            {
              messages: [
                {
                  message: 'This code is invalid'
                }
              ]
            }
          ]
        }
      })
    })
    cy.visit('/reset-password?code=invalid')
    cy.findByPlaceholderText(/^password/i).type('123123')
    cy.findByPlaceholderText(/^confirm password/i).type('123123')
    cy.findByRole('button', { name: /reset password/i }).click()
    cy.findByText(/This code is invalid/i).should('exist')
  })

  it('it should complete reset password and sign in to home', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: '200',
        body: {
          user: { email: 'teste@email.com' }
        }
      })
    })
    cy.intercept('POST', '**/auth/callback/credentials*', (res) => {
      res.reply({
        status: '200',
        body: {
          user: { email: 'teste@email.com' }
        }
      })
    })
    cy.intercept('GET', '**/auth/session*', (res) => {
      res.reply({
        status: '200',
        body: { user: { name: 'teste', email: 'teste@email.com' } }
      })
    })
    cy.visit('/reset-password?code=valid')
    cy.findByPlaceholderText(/^password/i).type('123123')
    cy.findByPlaceholderText(/^confirm password/i).type('123123')
    cy.findByRole('button', { name: /reset password/i }).click()
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/teste/i).should('exist')
  })
})
