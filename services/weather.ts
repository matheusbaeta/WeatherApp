import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

interface GeoLocationData {
    lat: number;
    lon: number;
}

interface WeatherData {

}

// TO DO --> INTERFACE INDIVIDUAL COUNTRY DATA

const getCity = (locationName: string): Promise<GeoLocationData[]> => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&appid=${API_KEY}`;
    const request = axios.get(url)
    return request.then(response => response.data);
}

const getWeatherConditions = (lat:number, lon:number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const request = axios.get(url)
    return request.then(response => response.data);
}

export default { getCity, getWeatherConditions };
