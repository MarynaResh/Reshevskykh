/// <reference types="cypress-xpath" />
////<reference types = "Cypress"/>
//import { faker } from '@faker-js/faker';
import '@4tw/cypress-drag-drop';


// describe('classwork1, () => {
//     const randomEmail = faker.internet.email();
//     const randomName = 'AutomationTest' + faker.name.fullName();
//     const randomLastName = faker.name.lastName();
//     const id = faker.datatype.uuid();
//     const img = faker.image.avatar();
//     // data
//     // birthday
//     // password
//     const arr = faker.helpers.arrayElement(['free','toy','length'])
//     before(() => {
//         cy.visit('https://www.beaxy.com/register/'):
//         cy.viewport(1600, 900);
//         cy.wait(2000);
//     });

//     it('test1', () => {

//     })
// } )


// describe('classwork2', () => {

//     before(() => {
//         cy.visit('hhttps://testautomationpractice.blogspot.com/'):
//         cy.viewport(1600, 900);
//         cy.wait(2000);
//     });
//     it('test1', () => {
//         cy.on('window:confirm', (str) => {
//         cy.get('[onclick="myFunction()"]').click();
//         cy.on('window:confirm',(str)=>{
//             expect(str).to.equal('Press aqweqwe')
//         })
//     })
// });
// });

// describe('classwork3', () => {
//     it('test1', () => {
//         cy.visit('https://testautomationpractice.blogspot.com/');
//         cy.viewport(1600, 900);
//         cy.wait(2000);
//         cy.get('#gallery li:nth-child(1)').drag('#trash');
//         cy.get('#gallery li:nth-child(2)').drag('#trash');
//         cy.scrollTo('start');
//         cy.get('[class="widget-content"] #draggable').drag('[class="widget-content"] #droppable');
//     });
// });


// describe('classwork2', () => {
//     before(() => {
//          cy.visit('https://testautomationpractice.blogspot.com/');
//          cy.viewport(1600, 900);
//          cy.wait(2000);
//      });
//      it('test2', () => {
//         cy.get('#slider span').invoke('attr', 'style', 'left: 80%')
//      });
// });



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