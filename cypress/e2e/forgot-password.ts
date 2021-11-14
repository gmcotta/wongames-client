// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should fill the input and receive an email', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        status: '200',
        body: { ok: true }
      })
      expect(res.body.email).to.eq('ci@wongames.com')
    })
    cy.visit('/forgot-password')
    cy.findByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()
    cy.findByText(/Email sent! Please, check your inbox/i).should('exist')
  })

  it('should fill the input with invalid email and get error', () => {
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        status: '400',
        body: {
          error: 'Bad request',
          message: [
            {
              messages: [
                {
                  message: 'This email does not exist'
                }
              ]
            }
          ]
        }
      })
    })
    cy.visit('/forgot-password')
    cy.findByPlaceholderText(/email/i).type('ci@wongames.com')
    cy.findByRole('button', { name: /send email/i }).click()
    cy.findByText(/This email does not exist/i).should('exist')
  })
})
