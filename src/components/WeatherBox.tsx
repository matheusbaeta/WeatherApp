import { FC } from "react"

interface WeatherBoxProps {
    temperature: number;
    description: string;
    icon: string;
}

const WeatherBox: FC<WeatherBoxProps> = (props) => {
    // convert temperature to celsius
    const temp = props.temperature - 273.15

    return (
        <div className="weather-box">
            <img src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`} />
            <p className="temperature">{ temp.toFixed(2) }<span>°C</span></p>
             <p className="description">{ props.description }</p>
        </div>
        
    );
}

export default WeatherBox;