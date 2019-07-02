import { SubmissionForm } from "../fw/modules/submission-form";

describe('Submission form', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('create a submission', () => {
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

    it('ruled submission', () => {
        const form = new SubmissionForm();

        form
            .selectLineOfBusiness('LIABILITY')
            .selectPeril('TERRORISM')
            .fillInsuredCompany('EPAM')
            .fillBroker('Darth Vader')
            .selectCountry('United States of America')
            .fillAddress('9999 Spruce St. La Puente, CA 91744')
            .submit();
    });

});
