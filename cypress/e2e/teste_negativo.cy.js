describe('Test Cases para geekie', () => {
    it('Não deve mostrar o texto “Geekie One de ponta a ponta” dentro da página BLOG  dentro da sessão de artigos', () => {
       cy.visit('https://www.geekie.com.br/')
       cy.viewport(1280, 720) // Largura de 1280px e altura de 720px
       cy.contains('Geekie One de ponta a ponta').should('be.visible')
       cy.get('#menu-item-13811 > a').click()
       cy.get('.wds-module > [href="https://www.geekie.com.br/category/artigos/"]').click()
       cy.contains('Geekie One de ponta a ponta').should('not.exist');
     });
   });