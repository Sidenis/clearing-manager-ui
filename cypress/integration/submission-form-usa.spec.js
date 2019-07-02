import { SubmissionForm } from "../fw/modules/submission-form";

describe('Submission form', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('create a USA fire submission', () => {
        const form = new SubmissionForm();

        form
            .selectLineOfBusiness('LIABILITY')
            .selectPeril('FIRE')
            .fillInsuredCompany('Other company')
            .fillBroker('Darth Vader')
            .selectCountry('United States of America')
            .fillAddress('Imaginary St. 19/99')
            .submit();

        cy.get('[data-test=rules-list]')
            .find('[data-test=rule]')
            .should('have.lengthOf', 2);
    });

});
