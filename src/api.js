import axios from "axios";

const optionsGetCities = {
    headers: {
        'X-RapidAPI-Key': 'd7474c714dmsh473981e14d9ac7fp18a85ejsnab2bdf222cf8',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};
const GEO_GET_CITIES_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const getCities = (inputValue) => {
    return axios.get(`${GEO_GET_CITIES_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        optionsGetCities
    )
}