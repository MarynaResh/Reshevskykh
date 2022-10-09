///<reference types="cypress" />



describe('Api', () => {
    it('get', () => {
        cy.request('GET', '	https://dummy.restapiexample.com/api/v1/employees')
        .its('status').should('equal', 200)
    })

    it('get', () => {
        cy.request('GET', '	https://dummy.restapiexample.com/api/v1/employees')
        .its('body')
        .its('data')
        .should('not.be.empty')
        .should('deep.include', {//paste part body object
 
        })
    })
    it('create personal employee', () => {
        const baseURL = 'https://dummy.restapiexample.com/api/v1';
        const bodyRequest = {"name":"test","salary":"123","age":"23"};
        cy.request('POST', `${baseURL}/create`, bodyRequest)
        .its('body')
        .its('message').should('equal', 'Successfully! Record has been added.')
    })
    it('add pet', () => {
        const baseURL = 'https://petstore.swagger.io/v2';
        const bodyRequest = {
            id: 4,
            category: {
              id: 14,
              name: "string"
            },
            name: "doggie",
            photoUrls: [
              "string"
            ],
            tags: [
              {
                id: 24,
                name: "string"
              }
            ],
            status: "available"
          };
        //   const headerParam = 'accept: application/json';
        //   const headerParam2 = 'Content-Type: application/json';
        cy.request('POST', `${baseURL}/pet`, bodyRequest) //интерполяция
        .its('status').should('eq', 200)
    })
    it.only('find pet', () => {
        const baseURL = 'https://petstore.swagger.io/v2';

        cy.request('GET', `${baseURL}/pet/findByStatus?status=available`)
        .its('status').should('eq', 200)
        .its('body')
})
})


//examples
describe('Practical task - 1', () => {
    it('POST /pet  Add a new pet to the store', () => {
cy.request({
    method: 'POST', 
    url: 'https://petstore.swagger.io/v2/pet', 
    body: {
    "id": 23,
    "category": {
      "id": 0,
      "name": "cats"
 },
    name: "Marfa Vasylivna",
    photoUrls: [
      "https://www.instagram.com/p/CRCyXa8MIUl/"
    ],
    tags: [
      {
        id: 0,
        name: "#marfavasilievna"
      }
    ],
    "status": "sold"
  } }) .then((response) => {
            cy.log('RESPONSE 1 ', response);
            cy.log('RESPONSE 2 ', JSON.stringify(response));

            const { name } = response.body;
            expect(name).equal("Marfa Vasylivna");
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('category');
          });
    })
    // one more 

    it('GET /pet/findByStatus Finds Pets by status', () => {
        const status = 'sold';
        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`, 
          }).then((response) => {
            const { name } = response.body[0].category;
            cy.log(JSON.stringify(response.body[0].category)); //преобразовываем в текст
            expect(response.status).to.eq(200);
            expect(name).equal('cat');
          });
      }) 

      //two more
      it.only('POST /pet/{petId} Updates a pet in the store with form data', () => {
        cy.request({
          method: 'POST', 
          url: 'https://petstore.swagger.io/v2/pet', 
          body: {
          "id": 23,
          "category": {
            "id": 0,
            "name": "cats"
       },
          name: "Marfa Vasylivna",
          photoUrls: [
            "https://www.instagram.com/p/CRCyXa8MIUl/"
          ],
          tags: [
            {
              id: 0,
              name: "#marfavasilievna"
            }
          ],
          "status": "sold"
        } })


        const petId = '23';
        cy.request({
            method: 'POST',
            url: `https://petstore.swagger.io/v2/pet/${petId}`, 
            form: true,
            body: {
                name: 'Vasylka',
                status: 'pending'
            }
          }).then((response) => {
            const { name } = response.body; 
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
          });

        cy.request('get', 'https://petstore.swagger.io/v2/pet/23').then((response) => {
            const {name, photoUrls, category} = response.body; 
            expect(name).equal("Vasylka");
            cy.log(photoUrls[0]);
            cy.log(category);
            expect(photoUrls[0]).to.equal('https://www.instagram.com/p/CRCyXa8MIUl/');
        })
      }) 
    });

    //new example
    describe('Api',()=>{
        it.only('123123', () => {
            cy.request('GET','https://swapi.dev/api/people/1/').then((response)=>{
            expect(response).to.have.property('status', 200);
            expect(response.body).to.have.property('birth_year', "19BBY");
            expect(response.body.films).to.have.property('0','https://swapi.dev/api/films/1/');
            expect(response).to.have.be.not.null;
        
            })
          })
        });

