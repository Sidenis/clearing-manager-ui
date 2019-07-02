export const fetchCountries = async () => {
    try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const list = await response.json();
        return list.map(it => ({ name: it.name, code: it.alpha3Code }))
    } catch (e) {
        return [{ name: 'Russian Federation', code: 'RUS' }];
    }
};
