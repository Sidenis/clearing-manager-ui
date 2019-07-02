describe('Submissions history list', () => {

    it('should display the history list', () => {
        cy.visit('/cards');
        cy.contains('History');
    });

});
