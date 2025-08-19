describe('ToDo App - Frontend', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('Deve adicionar uma nova tarefa', () => {
    cy.get('#new-task').type('Estudar Cypress{enter}');
    cy.get('#task-list').should('contain', 'Estudar Cypress');
  });
});
