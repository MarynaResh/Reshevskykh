/*
Comments:
1. email: `${generateEmail}`, ->  email: generateEmail тут и так будет работать
2. url: `https://gorest.co.in/public/v1/users/212121212`? Чего захаркоджено должен динамически передаваться
3. body - выносим в отдельную переменную 
body:{
            name: "Maryna Krupka",
            gender: "female",
            email: `${generateEmail}`,
            status: "active"
          }
          
 4.   failOnStatusCode: false - не злоупотребляйте там все работает хорошо на удаление
 
 
 Пример 
 
 
 
 
 
 
 /// <reference types="cypress" />
import { faker } from "@faker-js/faker";

И так домашнее задание:
Home work: 
1.Если не закончили с практическим заданием - дописываем
2. Дописать тесты на https://gorest.co.in/
PUT / Path и DELETE (по аналогии с практическим)


describe("GoRest test", () => {

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50" -XGET "https://gorest.co.in/public/v2/users"

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenalid.ramakrishna@15ce.com", "status":"active"}'

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPATCH "https://gorest.co.in/public/v2/users/13" -d '{"name":"Allasani Peddana", "email":"allasani.peddana@15ce.com", "status":"active"}'

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XDELETE "https://gorest.co.in/public/v2/users/13"


  it.only("PUT/PATCH", () => {
    const bearerToken =
      "Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50";
    const baseUrl = "https://gorest.co.in/public/v2/";
    const randomEmail = faker.internet.email();
    const randomName = faker.name.fullName();
    const defaultBody = {
      name: randomName,
      gender: "female",
      email: randomEmail,
      status: "active",
    };

    const updatedBody = {
      name: randomName,
      email: randomEmail,
      status: "active",
    };
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers: {
        Authorization: bearerToken,
      },
      body: defaultBody,
    }).then((response) => {
      const { id } = response.body;
      cy.log("Result ", id);
      cy.request({
        method: "PUT",
        url: `${baseUrl}/users/${id}`,
        headers: {
          Authorization: bearerToken,
        },
        body: updatedBody,
      }).then(() => {
        cy.request({
          method: "DELETE",
          url: `${baseUrl}/users/${id}`,
          headers: {
            Authorization: bearerToken,
          },
        })
          .its("status")
          .should("equal", 204);
      });
    });
  });
});


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
    url: `https://gorest.co.in/public/v1/users/212121212`,
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


