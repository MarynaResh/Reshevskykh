///<reference types= "Cypress"/>

describe('Cookies', () => {
  xit('checkCookies', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.scrollTo('center');
    cy.get('.modal-cookie-continue a',{timeout:4000}).click();
    cy.getCookie('beaxy_cookie_notificated',{timeout:4000}).should('have.property', 'value', 'true');
  });

  xit('setCookies', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.setCookie('alphaSchool', 'true');
  });

  xit('clearCookies', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.clearCookies();
  });

  xit('clearCookie', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.clearCookie('_ga');
  });

  it('updateCookie', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.scrollTo('center');
    cy.get('.modal-cookie-continue a',{timeout:4000}).click();
    cy.clearCookie('beaxy_cookie_notificated').then(function(){
      cy.setCookie('beaxy_cookie_notificated', 'false').then(function(){
        cy.getCookie('beaxy_cookie_notificated', {timeout:4000}).should('have.property', 'value', 'false');
      });
    });
  });

  xit('checkLengthCookies', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.getCookies().should('have.length', 3);
  });

  it('checkCLearCookies', () => {
    cy.viewport(1950, 1600);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.clearCookies();
    cy.getCookies().should('be.empty');
  });
})