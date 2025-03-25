import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlass, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
import  notFound  from './assets/location_not_found.png'

const App = () => {
 return (
  <>
  <div className='container'>
      <div className='search-box'>
        <FontAwesomeIcon icon={faLocationDot} />
        <input />
        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
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
          <FontAwesomeIcon icon={faDroplet} />
          <div className="text">
            <span></span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind-speed">
          <FontAwesomeIcon icon={faWind} />
          <div className="text">
            <span></span>
            <p>Wind Speed</p>
          </div>
        </div>

      </div>

  </div>
  </>
 );
};

export default App;   