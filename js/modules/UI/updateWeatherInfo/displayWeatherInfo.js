import countryInfo from "../../../../assets/data/countryData.js";
import { weather } from "../../../config.js";
import {
  cloudPercentage,
  feelLikeValue,
  humidityValue,
  locationFlag,
  locationName,
  sunriseValue,
  sunsetValue,
  temperatureType,
  temperatureValue,
  weatherIcon,
  weatherType,
  windUnit,
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
      clouds: { all: clouds },
    },
    unit,
    countryName,
    cityName,
    countryCode,
  } = weather;

  const { main, description, icon } = mainWeatherInfo[0];

  console.log(main, "main");

  if (cityName) {
    locationName.innerText = `${cityName}, ${countryCode}`;
  } else {
    locationName.innerText = `${countryName}`;
  }
  console.log(countryName);

  locationFlag.src = countryInfo[countryName].flag;

  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;

  weatherType.innerText = main;

  cloudPercentage.innerText = `Clouds: ${clouds}%`;

  temperatureValue.innerText = `${Math.floor(temp)}`;
  temperatureType.innerText = unit === "metric" ? "C" : "F";

  feelLikeValue.innerHTML = `${feels_like} <sup>o</sup>`;
  humidityValue.innerText = `${humidity}%`;

  windValue.innerText = `${speed}`;

  windUnit.innerText = `${unit === "metric" ? "meter/sec" : "miles/hour"}`;

  console.log(sunrise, sunset);
  sunriseValue.innerText = getSunriseOrSunsetTime(sunrise);
  sunsetValue.innerText = getSunriseOrSunsetTime(sunset);
}
