Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('e(...).setup is not a function')) {
      return false
    };
  });

describe('work', () => {
    it('new', () => {
        cy.viewport(1600, 1024);
        cy.visit('https://demoqa.com/frames');
        cy.wait(5000);
        cy.get('#frame1').then(function($iFrame) {
            const iframe = $iFrame.contents().find('body');
            cy.wrap(iframe).clear().type('Kirill, stop drinking!');
        });
    });
});