import React from 'react';
import { useCountries } from "../utils/countries";
import { Field, Form, Formik } from "formik";

export default ({ onSubmit }) => {
    const countries = useCountries();

    return (
        <Formik
            initialValues={{
                lob: '',
                peril: '',
                broker: '',
                insuredCompany: '',
                country: '',
                address: ''
            }}
            onSubmit={onSubmit}>
            {() => (
                <Form data-test='submission-form'>
                    <fieldset>
                        <label htmlFor="lob">LOB</label>
                        <Field component='select' name="lob" id="lob" data-test='line-of-business'>
                            <option value="-1">Select line of business</option>
                            <option value="LIABILITY">LIABILITY</option>
                            <option value="PROPERTY">PROPERTY</option>
                        </Field>

                        <label htmlFor="peril">Peril</label>
                        <Field component='select' name="peril" id="peril" data-test='peril'>
                            <option value="-1">Select a peril</option>
                            <option value="FIRE">FIRE</option>
                            <option value="NAT_CAT">NAT_CAT</option>
                            <option value="TERRORISM">TERRORISM</option>
                        </Field>

                        <label htmlFor="insured">Insured</label>
                        <Field type="text" name='insuredCompany' placeholder="Company to insure" id="insured"
                               data-test='insured-company'/>

                        <label htmlFor="broker">Broker</label>
                        <Field type="text" name='broker' placeholder="Company to insure" id="broker"
                               data-test='broker'/>

                        <label htmlFor="country">Country</label>
                        <Field component='select' name="country" id="country" data-test='country'>
                            <option value="-1">Select a country</option>
                            {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                        </Field>

                        <label htmlFor="address">Address</label>
                        <Field type="text" name='address' placeholder="Address" id="address" data-test='address'/>

                        <input className="button-primary" type="submit" value="Send" data-test='submit-btn'/>
                    </fieldset>
                </Form>
            )}
        </Formik>
    );
};
