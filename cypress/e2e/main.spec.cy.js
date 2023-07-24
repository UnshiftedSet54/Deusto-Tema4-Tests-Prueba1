let userEmail =

describe('Casos de uso de registro de usuario', () => {
  it('El usuario rellena campos y anade exitosamente, devolviendo un mensaje exitoso', () => {
    cy.get('#email').type('example@gmail.com')
    cy.wait(1000)
    cy.get('#password').type('Pwd123.')
    cy.wait(1000)
    cy.get('#repeatPassword').type('Pwd123.')
    cy.wait(1000)
    cy.get('button').click()
    cy.get('#message').contains('Usuario anadido exitosamente')
    cy.wait(1000)
  })
})