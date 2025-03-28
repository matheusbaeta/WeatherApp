import WeatherBox from "./WeatherBox";
import WeatherDetails from "./WeatherDetails";
import NotFound from "./NotFound";

import { FC, useEffect } from "react";

interface WeatherProps {
    // maybe pass the properties itself instead of passing the whole object
    weatherObj: any;
    container: string;
}

const Weather: FC<WeatherProps> = (props) => {
    console.log("inside of weather.tsx: ", props.weatherObj.description)

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
