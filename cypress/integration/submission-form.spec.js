import { SubmissionForm } from "../fw/modules/submission-form";

describe('Submission form', () => {

    it('create a submission', () => {
        cy.visit('/');

        const form = new SubmissionForm();

        form
            .selectLineOfBusiness('LIABILITY')
            .selectPeril('FIRE')
            .fillInsuredCompany('EPAM')
            .fillBroker('Darth Vader')
            .selectCountry('Russian Federation')
            .fillAddress('Imaginary St. 19/99')
            .submit();
    });

});
