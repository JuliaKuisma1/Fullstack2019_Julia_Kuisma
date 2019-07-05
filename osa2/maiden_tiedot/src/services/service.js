import axios from 'axios';

const baseUrlWeather = "http://api.apixu.com/v1/current.json?key=f1dcc98534714152b7372511190507&q";
const baseUrlCountry = "https://restcountries.eu/rest/v2/all";

const getCurrentWeather = (city) => {
    const request = axios.get(`${baseUrlWeather}=${city}`);
    return request.then(response => response.data);
}

const getAllCountries = () => {
    const request = axios.get(`${baseUrlCountry}`);
    return request.then(response => response.data);
}

export default { getCurrentWeather, getAllCountries }