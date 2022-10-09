///<reference types= "Cypress"/>

 
describe('booking process', () => {
it('create user', () => {
cy.request({
     method: 'POST',
     url: 'https://restful-booker.herokuapp.com/booking',
     body: {
        firstname : "Jim",
        lastname : "Brown",
        totalprice : 111,
        depositpaid : true,
        bookingdates : {
            checkin : "2018-01-01",
            checkout : "2019-01-01"
        },
        additionalneeds : "Breakfast"
    }
}).then((response) => {
  expect(response).to.have.property('status', 200);
  expect(response.body).to.have.any.keys('bookingid');
  const bookingid = response.body.bookingid;
  cy.log(bookingid);
  cy.request({
  method: 'POST',
     url: 'https://restful-booker.herokuapp.com/auth',
     body: {
      username : "admin",
      password : "password123"
  }
}).then((responseAuth) =>{
  const token = responseAuth.body.token;
  cy.request({
  method: 'PUT',
     url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
     body: {
      firstname : "Jim",
      lastname : "Brown",
      totalprice : 111,
      depositpaid : true,
      bookingdates : {
          checkin : "2018-01-02",
          checkout : "2019-01-02"
      },
      additionalneeds : "Breakfast"
  },
     headers: {
      Cookie: `token=${token}`
     }
    });
});
});
});
})

   










// }).then((response) => {
//    expect(response).to.have.property('status', 201); 
// }).then((response) => {
//   const userId = response.body.data.id;
//   cy.log('USERID', userId)
//   // const { id } = response.body.data;
//   // cy.log('ID', id);
//     cy.request({
//       method: 'GET',
//      url: `https://gorest.co.in/public/v1/users/${userId}`,
//      headers:{
//               Authorization: accessToken
//             },
//     }).then((responseUser) => {
//       expect(responseUser).to.have.property('status', 200);
//       expect(responseUser.body.date).to.have.property('email', generateEmail);
//     });
// });
// })
