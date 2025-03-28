import { FC } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'


interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
}

const WeatherDetails: FC<WeatherDetailsProps> = (props) => {
    return (
      <div className="weather-details">

        <div className="humidity">
          <FontAwesomeIcon icon={faDroplet}  className='weather-icon'/>
          <div className="text">
            <span>{ props.humidity }%</span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind-speed">
          <FontAwesomeIcon icon={faWind}  className='weather-icon'/>
          <div className="text">
            <span>{ props.windSpeed }Km/h</span>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>        
    )
}

export default WeatherDetails;