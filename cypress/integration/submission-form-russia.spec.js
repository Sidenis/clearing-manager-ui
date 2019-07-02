import { SubmissionForm } from "../fw/modules/submission-form";

describe('Submission form', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('create a Russia submission', () => {
        const form = new SubmissionForm();

        form
            .selectLineOfBusiness('PROPERTY')
            .selectPeril('FIRE')
            .fillInsuredCompany('Other company')
            .fillBroker('Darth Vader')
            .selectCountry('Russian Federation')
            .fillAddress('Imaginary St. 19/99')
            .submit();

    });

});
