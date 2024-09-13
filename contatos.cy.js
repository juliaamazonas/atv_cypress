describe('Testes de funcionalidades da Agenda de Contatos', () => {
  
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Deve adicionar um novo contato', () => {
      cy.get('[data-testid="add-contact"]').click();
  
      
      cy.get('[data-testid="input-nome"]').type('Jose Carlos');
      cy.get('[data-testid="input-telefone"]').type('1191234567');
      cy.get('[data-testid="input-email"]').type('josecarlos@email.com');
  
      
      cy.get('[data-testid="btn-salvar"]').click();
  
      
      cy.contains('Jose Carlos').should('exist');
      cy.contains('1191234567').should('exist');
      cy.contains('josecarlos@email.com').should('exist');
    });
  
    it('Deve editar um contato existente', () => {
      
      cy.contains('Jose Carlos').parent().find('[data-testid="btn-editar"]').click();
  
      
      cy.get('[data-testid="input-nome"]').clear().type('Joao da Silva');
  
      
      cy.get('[data-testid="btn-salvar"]').click();
  
      
      cy.contains('Joao da Silva').should('exist');
    });
  
    it('Deve remover um contato', () => {
      
      cy.contains('Joao da Silva').parent().find('[data-testid="btn-remover"]').click();
  
      
      cy.contains('Joao da Silva').should('not.exist');
    });
  
  });
  