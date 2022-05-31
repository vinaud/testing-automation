
describe('Home page', () =>{
    it('App deve estar online', () =>{
        cy.viewport(1920, 1080);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats');
    });
});