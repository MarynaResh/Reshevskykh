describe('work', () => {
    it('new', () => {
        cy.viewport(1600, 1600);
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.wait(3000);
        cy.get('iFrame').then(function($iFrame){
            const iFrame = $iFrame.contents().find('body');
            cy.wrap(iFrame).find('[title="Slider"] span').then((content)=> {
                expect(content.text()).contain('Slider')
            })
        })
    });
    it.only('new1', () => {
        cy.viewport(1600, 1600);
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.wait(3000);
        cy.get('iFrame').then(function($iFrame){
            const iFrame = $iFrame.contents().find('body');
            cy.wrap(iFrame).find(':first-child.ea-editor-templates-actions-customize').click()
            })
        })
    });
