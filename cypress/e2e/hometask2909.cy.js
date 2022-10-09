///<reference types="cypress-iframe" />

//Small steps tests
describe('Small steps', () => {
it('test1', () => {
    cy.visit('https://mui.com/material-ui/react-slider/');
    cy.viewport(2024, 1600);
    cy.wait(3000);
    cy.scrollTo(0, 1500);
    cy.wait(5000);
    cy.get('#demo-j567pr1uk9p .MuiSlider-track').invoke('attr', 'style', 'left: 0%; width: 20%;');
});
});