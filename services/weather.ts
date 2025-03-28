import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;

interface GeoLocationData {
    lat: number;
    lon: number;
}

interface WeatherData {
    name: string;
    temperature: number;
    humidity: number;
    icon: string;
    windSpeed: number;
    description: string;
  }

const getCity = (locationName: string): Promise<GeoLocationData[]> => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&appid=${API_KEY}`;
    const request = axios.get(url)
    return request.then(response => response.data);
}

const getWeatherConditions = (lat: number, lon: number): Promise<WeatherData> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    return axios.get(url).then(response => {
      const { name, main, weather, wind } = response.data;
      return {
        name,
        temperature: main.temp,
        humidity: main.humidity,
        icon: weather[0].icon,
        windSpeed: wind.speed,
        description: weather[0].main
      };
    });
};


export default { getCity, getWeatherConditions };
