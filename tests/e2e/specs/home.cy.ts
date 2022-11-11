describe('Home', () => {
    it('visits the home root url', () => {
        cy.visit('/')
        cy.contains('h1', 'Home page')
    })
})