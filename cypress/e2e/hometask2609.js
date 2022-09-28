// Напишите тест на фреймы по ссылке ниже https://demoqa.com/frames 
// (проверку напишите на ваше усмотрение, к примеру введите текст и проверьте его)

describe('homework1', () => {
  it.only('task1', () => {
    cy.viewport(1600, 1024);
    cy.visit('https://demoqa.com/frames');
    cy.wait(3000);
    cy.get('#frame1').then(function($iFrame){
      const iframe = $iFrame.contents().find('h1');
      cy.wrap(iframe).clear().type('Have a nice day!');
    });
  });
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


  


