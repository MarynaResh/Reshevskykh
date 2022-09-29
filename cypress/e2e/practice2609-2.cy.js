describe('Add to card', () => {
    it('', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.wait( 10000);
        cy.get('[data-hook="add-to-cart"]').click();
        cy.wait(10000);
        cy.get('iframe').then(function($iFrame) {
            const iframe = $iFrame.contents().find('body');
            cy.wrap(iframe).find('[data-hook="cart-widget-name"]').then((content)=> {
                expect(content.text()).to.be.equal('Croc Clutch')
            })        
        })
    });
  });