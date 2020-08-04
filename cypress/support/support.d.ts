/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    mockGraphQL(): Chainable<Subject>

    stubGraphQL(operationName: string, response: string): Chainable<Subject>
  }
}
