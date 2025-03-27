import WeatherBox from "./WeatherBox";
import WeatherDetails from "./WeatherDetails";

import { FC } from "react";

const Weather: FC<any> = (props) => {
    return (
        <div>
            <WeatherBox />
            <WeatherDetails />
        </div>
    )
}

export default Weather;
