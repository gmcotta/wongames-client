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
})
