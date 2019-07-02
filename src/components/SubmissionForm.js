import React from 'react';
import { useCountries } from "../utils/countries";
import { Field, Form, Formik } from "formik";

export default ({ onSubmit }) => {
    const countries = useCountries();
    return (
        <Formik
            initialValues={{
                lob: '',
                insured: '',
                country: '',
                address: ''
            }}
            onSubmit={onSubmit}>
            {({}) => (
                <Form>
                    <fieldset>
                        <label htmlFor="lob">LOB</label>
                        <Field component='select' name="lob" id="lob">
                            <option value="-1">Select line of business</option>
                            <option value="1">LIABILITY</option>
                            <option value="2">PROPERTY</option>
                        </Field>

                        <label htmlFor="insured">Insured</label>
                        <Field type="text" name='insured' placeholder="Company to insure" id="insured"/>

                        <label htmlFor="country">Country</label>
                        <Field component='select' name="country" id="country">
                            <option value="-1">Select a country</option>
                            {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                        </Field>

                        <label htmlFor="address">Address</label>
                        <Field type="text" name='address' placeholder="Address" id="address"/>

                        <input className="button-primary" type="submit" value="Send"/>
                    </fieldset>
                </Form>
            )}
        </Formik>
    );
};
