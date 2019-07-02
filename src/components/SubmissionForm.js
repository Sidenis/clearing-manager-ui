import React from 'react';

export default () => {
    return (
        <form>
            <fieldset>
                <label htmlFor="lob">LOB</label>
                <select name="lob" id="lob">
                    <option value="-1">Select line of business</option>
                    <option value="1">liability</option>
                    <option value="2">property</option>
                </select>

                <label htmlFor="country">Country</label>
                <select name="country" id="country">
                    <option value="-1">Select a country</option>
                    <option value="1">Swiss</option>
                    <option value="2">Germany</option>
                    <option value="2">China</option>
                </select>

                <label htmlFor="insured">Insured</label>
                <input type="text" placeholder="Company to insure" id="insured"/>

                <label htmlFor="address">Address</label>
                <input type="text" placeholder="Address" id="address"/>

                <input className="button-primary" type="submit" value="Send"/>
            </fieldset>
        </form>
    );
};
