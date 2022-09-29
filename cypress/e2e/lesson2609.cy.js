describe('work', () => {
  it('new', () => {
    cy.viewport(1600, 1024);
    cy.visit('http://the-internet.herokuapp.com/iframe');
    cy.wait(3000);
    cy.get('iFrame').then(function($iFrame){
      const iFrame = $iFrame.contents().find('body');
      cy.wrap(iFrame).clear().type('hello')
    })
  })
});
it('new', () => {
    cy.viewport(1600, 1600);
    cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
    cy.wait(3000);
    cy.get('iFrame').then(function($iFrame){
      const iFrame = $iFrame.contents().find('body');
      cy.wrap(iFrame).find('.ea-editor-templates-header').then((el)=> {
        expect(el.text()).to.be.equal('Select a template to start with');
      })
    })
  });


  


