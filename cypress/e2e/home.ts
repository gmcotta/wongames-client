// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')
    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /the elder scrolls iv: oblivion/i })
      cy.findByRole('link', { name: /buy now/i })
      cy.get('.slick-dots > :nth-child(2) > button').click()
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(500)
      cy.findByRole('heading', { name: /kenshi/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
