import { weather } from "../../../config.js";
import {
  feelLikeValue,
  humidityValue,
  sunriseValue,
  sunsetValue,
  temperatureType,
  temperatureValue,
  weatherDescription,
  weatherIcon,
  weatherType,
  windValue,
} from "../../elements.js";
import getSunriseOrSunsetTime from "../../utilities/getSunriseOrSunsetTime.js";

export default function displayWeatherInfo() {
  const {
    data: {
      weather: mainWeatherInfo,
      main: { temp, feels_like, humidity },
      wind: { speed },
      sys: { sunrise, sunset },
    },
    unit,
  } = weather;

  const { main, description, icon } = mainWeatherInfo[0];

  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;

  weatherType.innerText = main;
  weatherDescription.innerText = description;

  temperatureValue.innerText = `${temp}`;
  temperatureType.innerText = unit === "metric" ? "C" : "F";

  feelLikeValue.innerHTML = `${feels_like} <sup>o</sup>`;
  humidityValue.innerText = `${humidity}%`;

  windValue.innerText = `${speed}${
    unit === "metric" ? "meter/sec" : "miles/hour"
  }`;

  sunriseValue.innerText = getSunriseOrSunsetTime(sunrise);
  sunsetValue.innerText = getSunriseOrSunsetTime(sunset);
}
