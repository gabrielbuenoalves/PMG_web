describe('Sample Test', () => {
    context('Sample Context', () => {
        it('logs on Google and types something', () => {
            cy.visit('https://www.google.com/')

            cy.get('.gLFyf')
                .type('Slash{enter}')
        })
    })
})