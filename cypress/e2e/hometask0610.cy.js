/*
Comments:
1. email: `${generateEmail}`, ->  email: generateEmail тут и так будет работать
2. url: `https://gorest.co.in/public/v1/users/212121212`? Чего захаркоджено должен динамически передаваться
- случайно сохранила не то немного, исправила 
3. body - выносим в отдельную переменную 
body:{
            name: "Maryna Krupka",
            gender: "female",
            email: `${generateEmail}`,
            status: "active"
          }
*/

///<reference types= "Cypress"/>
import { faker } from '@faker-js/faker';
 
describe('Api Users', () => {
 
const accessToken = 'Bearer 2094a1c8b71c7c8cfac71634ba43d20e51d3afc815b7c5f009c0852187e29293';
const generateEmail = faker.internet.email();
const nameUpdate = "Maryna Reshevskykh"

it('test user', () => {
cy.request({
    method: 'POST',
    url: 'https://gorest.co.in/public/v1/users',
    headers:{
              Authorization: accessToken
            },
    body:{
            name: "Maryna Krupka",
            gender: "female",
            email: `${generateEmail}`,
            status: "active"
          }      
}).then((responseCreate) => {
   expect(responseCreate).to.have.property('status', 201); 
}).then((responseCreate) => {
  const userId = responseCreate.body.data.id;
  cy.log('USER ID', userId);
  cy.request({
    method: 'PATCH',
    url: `https://gorest.co.in/public/v2/users/${userId}`,
    headers:{
             Authorization: accessToken
           },
     body:{
           name: nameUpdate
           }      
}).then((responseUpdate) => {
  expect(responseUpdate).to.have.property('status', 200);
  expect(responseUpdate.body).to.have.property('name', nameUpdate);
});
  cy.request({
    method: 'GET',
    url: `https://gorest.co.in/public/v1/users/${userId}`,
    headers:{
              Authorization: accessToken
            }
    }).then((responseUser) => {
      expect(responseUser).to.have.property('status', 200);
      expect(responseUser.body.data).to.have.property('name', nameUpdate);
    });
  cy.request({
    method: 'DELETE',
    url: `https://gorest.co.in/public/v1/users/${userId}`,
    headers:{
      Authorization: accessToken
    }
  }).then((responseDelete) => {
    expect(responseDelete).to.have.property('status', 204);
  });
  cy.request({
    method: 'GET',
    url: `https://gorest.co.in/public/v1/users/${userId}`,
    headers:{
              Authorization: "Bearer 2094a1c8b71c7c8cfac71634ba43d20e51d3afc815b7c5f009c0852187e29293"
            },
    failOnStatusCode: false
    }).then((responseUser2) => {
      expect(responseUser2).to.have.property('status', 404);
  });
});
});
});


