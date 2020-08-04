before(() => {
  cy.mockGraphQL()
  cy.server()
  cy.stubGraphQL('fetchCountries', 'fixture:countries')
})

it('checks if all countries are successfully fetched', () => {
  cy.visit(Cypress.env('HOST'))

  cy.contains('countries', { matchCase: false })
  cy.get('ul').children().should('have.length', 5)
})
