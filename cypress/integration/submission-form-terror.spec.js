import { SubmissionForm } from "../fw/modules/submission-form";

describe('Submission form', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('create a terrorism submission', () => {
        const form = new SubmissionForm();

        form
            .selectLineOfBusiness('LIABILITY')
            .selectPeril('TERRORISM')
            .fillInsuredCompany('Other company')
            .fillBroker('Darth Vader')
            .selectCountry('United States of America')
            .fillAddress('9999 Spruce St. La Puente, CA 91744')
            .submit();
        
    });

});
