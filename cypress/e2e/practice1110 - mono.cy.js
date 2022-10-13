describe('Visual Mono Test', () => {
  it('All page', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.monobank.ua/');
    cy.wait(5000);
    cy.matchImageSnapshot();
  });

  it('Block 1', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.monobank.ua/');
    cy.wait(5000);
    cy.get('.tab-panel .tab-link:nth-child(2)').click();
    cy.get('.mobile-app-tabs .tab-item:nth-child(2)').matchImageSnapshot();
  });

  it('Block 2', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.monobank.ua/');
    cy.wait(5000);
    cy.get('.tab-panel .tab-link:nth-child(3)').click();
    cy.get('.mobile-app-tabs .tab-item:nth-child(3)').matchImageSnapshot();
  });
});


