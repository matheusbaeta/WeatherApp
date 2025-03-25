import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
import  notFound  from './assets/location_not_found.png'
import './style.css'

const API_KEY = import.meta.env.API_KEY

const App = () => {
 return (
  <div className='container'>
      <div className='search-box'>
        <FontAwesomeIcon icon={faLocationDot}  className='location-dot-icon'/>
        <input placeholder={"Enter your location"}/>
        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </div>
      
      <div className="not-found">
        <img src={notFound} />
        <p>Not found!</p>
      </div>

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