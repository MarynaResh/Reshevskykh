
describe('Visual Beaxy test', () => {
  xit('test-1', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(8000);
    cy.matchImageSnapshot();
  });
});


describe('Visual Beaxy Test', () => {
  it('Home page', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(8000);
    cy.get('.currency .home-table-body').invoke('remove');
    cy.get('.widget__output-data-wrapp .widget__output-data').invoke('remove');
    cy.get('.currency .home-table-body').invoke('remove');
    cy.matchImageSnapshot();
  });
});