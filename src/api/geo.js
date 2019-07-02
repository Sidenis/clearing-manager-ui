import * as geocoder from "geocoder";

export const fetchCountries = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const list = await response.json();

    return list.map(it => ({ name: it.name, code: it.alpha3Code }))
};

export const locate = (address) =>
    new Promise((res, rej) => {
        geocoder.geocode(address, (err, response) => {
            if (err)
                rej(err);
            else
                res(response);
        }, { key: '?' });
    });
