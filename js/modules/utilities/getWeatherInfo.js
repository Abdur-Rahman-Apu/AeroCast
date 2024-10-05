import { weather } from "../../config.js";
import storeIntoStorage from "../storage/storeIntoStorage.js";
import showToastMessage from "../UI/toastMessage/showToastMessage.js";
import displayWeatherInfo from "../UI/updateWeatherInfo/displayWeatherInfo.js";
import { capitalize } from "./stringFn.js";
import updateGlobalData from "./updateGlobalData.js";

export default async function getWeatherInfo({ url, countryName, cityName }) {
  try {
    const res = await fetch(url);
    const weatherData = await res.json();

    // handle api error using the error code
    if (weatherData.cod === "400" || weatherData.cod === "404") {
      console.log(weatherData.message);
      showToastMessage({ message: weatherData.message, type: "error" });
      return;
    }

    // update the global data
    updateGlobalData({
      data: weatherData,
      countryName: capitalize(countryName) ?? null,
      cityName,
    });

    // update into storage
    storeIntoStorage(weather);

    // display in the UI
    displayWeatherInfo();
  } catch (err) {
    // show toast message
    showToastMessage({ message: err.message, type: "error" });
    return;
  }
}
