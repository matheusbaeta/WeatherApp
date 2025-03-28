import WeatherBox from "./WeatherBox";
import WeatherDetails from "./WeatherDetails";
import NotFound from "./NotFound";
import {ContainerOptions, WeatherData} from '../types/index';
import { FC } from "react";

interface WeatherProps {
    weatherObj: WeatherData;
    container: ContainerOptions;
}

const Weather: FC<WeatherProps> = (props) => {
    if(props.container === 'start') return ;

    if(props.container === 'not-found') {
        return (
            <NotFound />
        );
    }

    return (
        <div>
            <WeatherBox 
                temperature={ props.weatherObj.temperature } 
                description={ props.weatherObj.description }
                icon={ props.weatherObj.icon }
            />
            <WeatherDetails 
                humidity={ props.weatherObj.humidity }
                windSpeed={ props.weatherObj.windSpeed}
            />
        </div>
    );
}

export default Weather;
