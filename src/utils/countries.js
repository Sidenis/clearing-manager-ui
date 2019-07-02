import { useEffect, useState } from "react";
import { fetchCountries } from "../api/geo";

export const useCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries().then(setCountries);
    }, []);

    return countries;
};
