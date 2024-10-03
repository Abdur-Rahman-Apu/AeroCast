import apiKey from "../../api.js";
import { apiUrl, weather } from "../../config.js";
import retrieveFromStorage from "../storage/retrieveFromStorage.js";
import showToastMessage from "../UI/toastMessage/showToastMessage.js";
import apiFormat from "../utilities/apiFormat.js";
import getWeatherInfo from "../utilities/getWeatherInfo.js";

async function retrieveLocationSuccess(position) {
  const { latitude, longitude } = position.coords;

  const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${weather.unit}`;

  await getWeatherInfo({ url });
}

async function retrieveLocationError(error) {
  showToastMessage({ message: error.message, type: "error" });

  const weatherDataFromLocalStorage = retrieveFromStorage();

  let url = ``;

  if (weatherDataFromLocalStorage) {
    const countryName = weatherDataFromLocalStorage.countryName;
    const cityName = weatherDataFromLocalStorage.cityName;
    url = apiFormat({ countryName, cityName });
  } else {
    url = `${apiUrl}?q=London&appid=${apiKey}&units=${weather.unit}`;
  }

  await getWeatherInfo({ url, countryName, cityName });
}

export default async function currentLocationInfo() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      retrieveLocationSuccess,
      retrieveLocationError
    );
  } else {
    await retrieveLocationError({
      message: "Geolocation feature is not available",
    });
  }
}
