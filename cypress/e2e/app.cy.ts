describe('Navigation', () => {
  it('should navigate to page 2 from the page 1', () => {
    cy.visit('http://localhost:3000?page=1')

    cy.url().should('include', '?page=1')

    cy.get('a[href="#"]').contains('2').click()

    cy.url().should('include', '?page=2')
  })

  it('should navigate to the planet page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href="/1"]').click()

    cy.url().should('include', '/1')

    cy.get('button').contains('Go back')
  })

  it('should navigate to the planet page and go back correctly', () => {
    cy.visit('http://localhost:3000?page=2')

    cy.get('a[href="/11"]').click()

    cy.url().should('include', '/11')

    cy.get('button').contains('Go back').click()

    cy.url().should('include', '?page=2')
  })
})

describe('Search', () => {
  it('should search the planet name', () => {
    cy.visit('http://localhost:3000?page=1')

    cy.get('input').type('Serenno')

    cy.wait(600)

    cy.get('h3').contains('Serenno')
  })

  it('should search the planet name and remove the page query string', () => {
    cy.visit('http://localhost:3000?page=1')

    cy.get('input').type('Serenno')

    cy.wait(600)

    cy.get('h3').contains('Serenno')
    cy.url().should('not.include', '?page=1')
  })
})
