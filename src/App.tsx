import { ChangeEvent, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'

import  notFound  from './assets/location_not_found.png'
import './style.css'

import weatherService from '../services/weather'

import SearchBox from './components/SearchBox'
import NotFound from './components/NotFound'

const App = () => {

  const [input, setInput] = useState("")

  // create type countryWeather later on
  const [countryWeather, setCountryWeather] = useState({})

  const [countryFound, setCountryFound] = useState(true)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const searchCountry = (): void => {
   weatherService
      .getGeolocation(input)
      .then(geoData => {
        const { lat, lon } = geoData[0];
        return weatherService.getWeatherConditions(lat, lon);
      })
      .then(countryData => console.log(countryData))
      .catch(err => console.error("ERROR"))
  }

  const renderNotFound = (): void => {
    console.log("TO DO...")
  }

 return (
  <div className='container'>
      <SearchBox searchCountry={searchCountry} input={input} handleInputChange={ handleInputChange }/>

      {/* <div className='search-box'>
        <FontAwesomeIcon icon={faLocationDot}  className='location-dot-icon'/>
        <input
          placeholder={"Enter your location"}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => searchCountry()}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </div> */}
      
      {/* <div className="not-found">
        <img src={notFound} />
        <p>Not found!</p>
      </div> */}

      {!countryFound && <NotFound/>}

      <div className="weather-box">
        <img />
        <p className="temperature"></p>
        <p className="description"></p>
      </div>

      <div className="weather-details">

        <div className="humidity">
          <FontAwesomeIcon icon={faDroplet}  className='weather-icon'/>
          <div className="text">
            <span></span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind-speed">
          <FontAwesomeIcon icon={faWind}  className='weather-icon'/>
          <div className="text">
            <span></span>
            <p>Wind Speed</p>
          </div>
        </div>

      </div>

  </div>
 );
};

export default App;   