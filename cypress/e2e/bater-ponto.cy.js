describe('Batida de ponto automática', () => {
  it('Realiza a batida de ponto', () => {
    cy.visit('https://www.serasa.com.br'); // Ajuste se login é em outra rota
    cy.wait(5000);
    cy.get('#adopt-reject-all-button').click(); // Aceitar cookies, se necessário
    cy.wait(3000);
    cy.get('._1pq48hj2 > ._155xu8f0').click(); // Clicar no botão de login
    cy.wait(3000);
    cy.get('[name="cpf"]').type('050.472.733-85'); // Substitua pelo CPF real
  
  
  
  
  });
});

// Cypress.Commands.add('loginSerasa', () => {
//   cy.visit('/');
//   cy.get('#adopt-reject-all-button').click();
//   cy.get('._1pq48hj2 > ._155xu8f0').click();
//   cy.get('[name="cpf"]').type(Cypress.env('usuario'));
//   cy.get('[name="senha"]').type(Cypress.env('senha') + '{enter}');  // Senha faltou!
// });

// Cypress.Commands.add('baterPonto', () => {
//   // Adicione aqui depois de login funcionar
//   cy.get('.hamburger').click();
//   cy.contains('Marcação de ponto').click();
//   cy.get('button:contains("Bater")').click();
// });

// / ✅ LOGOUT LIMPO (final)
//     cy.get('[data-testid="logout"], .btn-sair, a:contains("Sair")').click();
//     cy.clearCookies();  // Limpa sessão
//     cy.clearLocalStorage();
    
