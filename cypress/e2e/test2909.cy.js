/// <reference types="cypress-xpath" />

describe('classwork2', () => {
    before(() => {
         cy.visit('https://mui.com/material-ui/react-slider/');
         cy.viewport(1600, 900);
         cy.wait(2000);
     });
     it('test3', () => {
            cy.xpath('//*[@aria-label="Small"]/ancestor::span[1]').invoke('attr','style','left: 88%;');
            cy.xpath('//*[@aria-label="Small"]/ancestor::span[2]/child::span[2]').invoke('attr','style','left: 0%; width: 88%;')
            cy.get('[aria-label="Small"]').invoke('attr','aria-valuenow','88').invoke('attr','value','88')
        });
}); 