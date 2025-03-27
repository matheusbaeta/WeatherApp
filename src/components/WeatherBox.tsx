import { FC } from "react"

const WeatherBox: FC<any> = (props) => {
    return (
        <div className="weather-box">
            <img />
            <p className="temperature"></p>
             <p className="description"></p>
        </div>
        
    );
}

export default WeatherBox;