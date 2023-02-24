describe.only('first test', () => {
  const user = {
    password: '12345'
  };

  it('should', () => {
    cy.visit('/');
    cy.get('input[name=email]')
      .type('teste1111@sodev.com.br')
      .should('have.value', 'teste1111@sodev.com.br');
    cy.get('input[name=password]')
      .type(user.password)
      .should('have.value', user.password);

    cy.get('button[type="submit"]').click();
  });
});

describe('Facebook', () => {
  const user = {
    email: 'most_wanted1.3@hotmail.com',
    password: '%WQN&kbY!!5=p2oV2O_T'
  };

  it('should access to login page', () => {
    cy.visit('https://www.facebook.com/');

    cy.get('input[name=email]').type(user.email);

    cy.get('input[name=pass]').type(user.password);

    cy.get('input[type="submit"]').click();

    cy.get('div[role=tablist]').should('be.visible');
  });
});

describe('Dicord', () => {
  const user = {
    email: 'jjalves96@gmail.com',
    password: '996carreragt'
  };

  it('should access to login page', () => {
    cy.visit('https://discord.com/login');

    cy.get('input[name=email]', {
      timeout: 6000
    }).type(user.email);

    cy.get('input[name=password]', {
      timeout: 6000
    }).type(user.password);

    cy.get('button[type="submit"]', {
      timeout: 6000
    }).click();

    // cy.get('div[role=tablist]').should('be.visible');
  });
});
