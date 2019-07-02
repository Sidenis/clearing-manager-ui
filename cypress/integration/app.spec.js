describe('Application', () => {

    it('should display default page', () => {
        cy.visit('/');

        cy.contains('Clearing Application');
    });

});
