describe('Practical-task-01', () => {
    it('test-01', () => {
        cy.visit('https://www.beaxy.com/buy-sell/');
        cy.get('div h1').invoke('text').then((result) => {
            cy.log(result);
            expect(result).to.be.equal('Buy and Sell Cryptocurrency with Ease')
        }
    })
});




// Practical task: Используя оба примера напишите два теста где проверите заголовки страниц:
// https://www.beaxy.com/buy-sell/
// https://www.beaxy.com/exchange/
// В обоих примерах получите текст и используя expect сделайте проверки.