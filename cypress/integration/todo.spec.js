describe('TodoMVC Vue app', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/todos').as('getTodos');

    cy.route({
      url: '/todos',
      method: 'POST',
      response: {}
    });

    cy.visit('/todomvc-vue');
  });

  it('should fetch todos', () => {
    cy.get('li.todo')
      .should('have.length', 3);
  });

  it('should add a todo task', () => {
    cy.wait('@getTodos');

    cy.addTodo('Use Jest');

    cy.get('li.todo')
      .should('have.length', 4);
  });

  it('should update a todo task', () => {
    cy.wait('@getTodos');

    cy.addTodo('Use Jest');

    cy.get(':nth-child(4) > .view > label')
      .dblclick();

    cy.get(':nth-child(4) > input')
      .clear()
      .type('Use Cypress FTW!')
      .type('{enter}');

    cy.get(':nth-child(4) > .view > label')
      .should('have.text', 'Use Cypress FTW!');
  });
});
