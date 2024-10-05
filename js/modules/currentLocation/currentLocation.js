import apiKey from "../../api.js";
import { apiUrl, weather } from "../../config.js";
import retrieveFromStorage from "../storage/retrieveFromStorage.js";
import showToastMessage from "../UI/toastMessage/showToastMessage.js";
import apiFormat from "../utilities/apiFormat.js";
import getWeatherInfo from "../utilities/getWeatherInfo.js";
import sendApiRequest from "../utilities/sendApiRequest.js";

// success callback function
async function retrieveLocationSuccess(position) {
  const { latitude, longitude } = position.coords;

  const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${weather.unit}`;

  await getWeatherInfo({ url });
}

// failure callback function
async function retrieveLocationError(error) {
  // show error message for the failure state
  showToastMessage({ message: error.message, type: "error" });

  // check previous data existence
  const weatherDataFromLocalStorage = retrieveFromStorage();

  let url = ``;

  // update the url
  if (weatherDataFromLocalStorage) {
    // if exist
    const countryName = weatherDataFromLocalStorage.countryName;
    const cityName = weatherDataFromLocalStorage.cityName;
    url = apiFormat({ countryName, cityName });
  } else {
    // not exist
    url = `${apiUrl}?q=London&appid=${apiKey}&units=${weather.unit}`;
  }

  await getWeatherInfo({ url, countryName, cityName });
}

export default async function currentLocationInfo() {
  // try to retrieve the previous weather data from the storage
  const weatherDataIntoStorage = retrieveFromStorage();

  // if previous data present then get that result
  if (weatherDataIntoStorage) {
    const { countryName, cityName } = weatherDataIntoStorage;
    await sendApiRequest({ countryName, cityName });
    return;
  }

  // if previous data not available, then get current location and show the weather result

  // checking geolocation is available or not in the browser
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      retrieveLocationSuccess,
      retrieveLocationError
    );
  } else {
    // if geolocation api is unavailable then run this function
    await retrieveLocationError({
      message: "Geolocation feature is not available",
    });
  }
}
