// https://docs.cypress.io/api/introduction/api.html

describe('Container Page ', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Convert integer to text')
    cy.contains('label', 'Enter your favorite number')
  })

  it('Enters value', () => {
    cy.get('.BaseInput').type(0)
    cy.get('.BtnSubmit').click()
    cy.contains('.Result', 'Zero')
  })

  it('Converts values', () => {
    cy.get('.BaseInput').type(11)
    cy.get('.BtnSubmit').click()
    cy.contains('.Result', 'Eleven')

    cy.get('.BaseInput').focus().clear()
    cy.contains('.ResultPlaceholder', 'Your number will show here')
    cy.get('.BaseInput').type(111)
    cy.get('.BtnSubmit').click()
    cy.contains('.Result', 'One hundred and eleven')
  })
})
