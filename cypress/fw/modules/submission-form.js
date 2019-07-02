export class SubmissionForm {

    get el() {
        return cy.get('[data-test=submission-form]');
    }

    selectLineOfBusiness(lob) {
        this.el
            .find('[data-test=line-of-business]')
            .select(lob);
        return this;
    }

    selectPeril(peril) {
        this.el
            .find('[data-test=peril]')
            .select(peril);
        return this;
    }

    fillInsuredCompany(company) {
        this.el
            .find('[data-test=insured-company]')
            .type(company);
        return this;
    }

    fillBroker(broker) {
        this.el
            .find('[data-test=broker]')
            .type(broker);
        return this;
    }

    selectCountry(country) {
        this.el
            .find('[data-test=country]')
            .select(country);
        return this;
    }

    fillAddress(address) {
        this.el
            .find('[data-test=address]')
            .type(address);
        return this;
    }

    submit() {
        this.el.find('[data-test=submit-btn]')
            .click();
    }

}
