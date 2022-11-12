// https://docs.cypress.io/api/introduction/api.html

describe('App title', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Notes 2000')
  })
})
