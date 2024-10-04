import { weather } from "../../../config.js";
import {
  cloudPercentage,
  dataUpdateTime,
  feelLikeValue,
  humidityValue,
  maxTempValue,
  minTempValue,
  pressureValue,
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
import { getCurrentTime } from "../../utilities/getTodayDateTime.js";
import { changeBgImage } from "../../utilities/randomBgImage.js";
import { lowerCase } from "../../utilities/stringFn.js";
import placeLocation from "../PlaceLocation/placeLocation.js";
import showToastMessage from "../toastMessage/showToastMessage.js";

export default function displayWeatherInfo() {
  const {
    data: {
      weather: mainWeatherInfo,
      main: { temp, feels_like, humidity, pressure, temp_max, temp_min },
      wind: { speed },
      sys: { sunrise, sunset },
      clouds: { all: clouds },
      dt,
    },
    unit,
    countryName,
    cityName,
    countryCode,
  } = weather;

  const { main, description, icon } = mainWeatherInfo[0];

  console.log(main, "main");

  placeLocation();

  changeBgImage(main);

  weatherIcon.src = `./assets/images/icons/weather-type/${lowerCase(main)}.png`;

  weatherType.innerText = main;

  cloudPercentage.innerText = `Clouds: ${clouds}%`;

  dataUpdateTime.innerText = `${getCurrentTime(dt)}`;

  temperatureValue.innerText = `${Math.floor(temp)}`;
  temperatureType.innerText = unit === "metric" ? "C" : "F";

  feelLikeValue.innerHTML = `${feels_like} <sup>o</sup>`;
  humidityValue.innerText = `${humidity}%`;

  windValue.innerText = `${speed}`;

  windUnit.innerText = `${unit === "metric" ? "meter/sec" : "miles/hour"}`;

  console.log(sunrise, sunset);
  sunriseValue.innerText = getSunriseOrSunsetTime(sunrise);
  sunsetValue.innerText = getSunriseOrSunsetTime(sunset);

  if (screen.width >= 1024) {
    pressureValue.innerText = `${pressure} hPa`;
    maxTempValue.innerHTML = `${temp_max}<sup>o</sup>`;
    minTempValue.innerHTML = `${temp_min}<sup>o</sup>`;
  }

  showToastMessage({ message: "Weather data updated", type: "success" });
}
