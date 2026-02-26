Cypress.Commands.add('loginPonto', () => {
  cy.visit('/'); // ou rota de login, ex: '/login'

  // Campos de login – AJUSTAR seletores

  // Espera a home carregar – AJUSTAR um seletor estável da home
  cy.get('#home-container', { timeout: 50000 }).should('be.visible');
});

Cypress.Commands.add('baterPonto', () => {
  // Abrir menu hambúrguer – AJUSTAR seletor
  
});


// Cypress.Commands.add('loginSerasa', () => {
//   cy.visit('/');
//   cy.get('#adopt-reject-all-button', { timeout: 10000 }).click();
//   cy.get('._1pq48hj2 > ._155xu8f0').click();
//   cy.get('[name="cpf"]').type(Cypress.env('usuario'));
//   cy.get('[name="senha"]').type(Cypress.env('senha') + '{enter}');  // Senha!
// });
