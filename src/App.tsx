import { ChangeEvent, useState } from 'react'
import './style.css'
import weatherService from '../services/weather'
import SearchBox from './components/SearchBox'
import Weather from './components/Weather'
import {ContainerOptions, WeatherData} from './types/index'

const App = () => {
  const emptyWeatherData = {
    name: "",
    temperature: 0,
    humidity: 0,
    icon: "",
    windSpeed: 0,
    description: ""
  }

  const [input, setInput] = useState("");
  const [cityWeather, setCityWeather] = useState<WeatherData>(emptyWeatherData);
  const [container, setContainer] = useState<ContainerOptions>('start');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const searchCountry = (): void => {
   weatherService
      .getCity(input)
      .then(geoData => {
        const { lat, lon } = geoData[0];
        return weatherService.getWeatherConditions(lat, lon);
      })
      .then((weatherData) => {
        setCityWeather(weatherData);
        setContainer('found');
      })
      .catch(() => {
        setCityWeather(emptyWeatherData);
        setContainer('not-found')
      })
  }

 return (
  <div className={`container-${container}`} >
      <SearchBox searchCountry={searchCountry} input={input} handleInputChange={ handleInputChange }/>
      <Weather weatherObj={ cityWeather } container={container}/>
  </div>
 );
};

export default App;   