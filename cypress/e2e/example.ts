// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should go to Google', () => {
    cy.google()
  })

  it('should change light/dark theme in willianjusten site', () => {
    cy.visit('https://willianjusten.com.br')
    cy.findByTitle(/mudar o tema/i).click()
    cy.get('.light').should('exist')
    cy.findByTitle(/mudar o tema/i).click()
    cy.get('.dark').should('exist')
  })
})
