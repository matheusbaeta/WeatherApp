import { ChangeEvent, useState } from 'react'

import './style.css'

import weatherService from '../services/weather'

import SearchBox from './components/SearchBox'
import Weather from './components/Weather'

const App = () => {

  const [input, setInput] = useState("");

  // create type countryWeather later on
  const [cityWeather, setCityWeather] = useState({});

  type containerOptions = 'start' | 'not-found' | 'found'

  const [container, setContainer] = useState<containerOptions>('start');

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
      .then(countryData => {
        const { name } = countryData;  
        const { temp, humidity} = countryData.main;
        const { icon } = countryData.weather[0];
        const { speed } = countryData.wind;
        const description = countryData.weather[0].main;

        const weatherObj = {
          name:  name ,
          temperature:  temp ,
          humidity:  humidity ,
          icon: icon,
          windSpeed: speed,
          description: description
        };

        setCityWeather(weatherObj)
        setContainer('found');
      })
      .catch(err => {
        setCityWeather({});
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