import { FC } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'

const WeatherDetails: FC<any> = (props) => {
    return (
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
    )
}

export default WeatherDetails;