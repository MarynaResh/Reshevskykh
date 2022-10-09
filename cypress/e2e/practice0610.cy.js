///<reference types= "Cypress"/>
import { faker } from '@faker-js/faker';
 
describe('Api OAuth', () => {
 
const accessToken = 'Bearer 2094a1c8b71c7c8cfac71634ba43d20e51d3afc815b7c5f009c0852187e29293';
const generateEmail = faker.internet.email();

it('create user', () => {
cy.request({
     method: 'POST',
     url: 'https://gorest.co.in/public/v1/users',
     headers:{
              Authorization: accessToken
            },
      body:{
            name:"T1est N1ame",
            gender:"male",
            email: generateEmail,
            status:"active"
            }      
}).then((response) => {
   expect(response).to.have.property('status', 201); 
}).then((response) => {
  const userId = response.body.data.id;
  cy.log('USERID', userId)
  // const { id } = response.body.data;
  // cy.log('ID', id);
    cy.request({
      method: 'GET',
     url: `https://gorest.co.in/public/v1/users/${userId}`,
     headers:{
              Authorization: accessToken
            },
    }).then((responseUser) => {
      expect(responseUser).to.have.property('status', 200);
      expect(responseUser.body.data).to.have.property('email', generateEmail);
    });
});
});
})
