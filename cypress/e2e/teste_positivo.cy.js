///<reference types="cypress" />

describe('Test Cases para geekie', () => {
 it('Abrir site da geekie navegar entre as páginas verificando que está na página correta', () => {
    cy.visit('https://www.geekie.com.br/')
    cy.viewport(1280, 720) // Largura de 1280px e altura de 720px
    cy.contains('Geekie One de ponta a ponta').should('be.visible')
    cy.get('#menu-item-299').click()
    cy.contains('Referência no Brasil em educação personalizada e inteligência de dados aplicada ao ensino e à aprendizagem').should('be.visible')
    cy.get('.site-branding > .custom-logo-link > .custom-logo').click()
    cy.contains('Geekie One de ponta a ponta').should('be.visible')
  });
});