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

    console.log(weatherData);

    if (weatherData.cod === "400" || weatherData.cod === "404") {
      console.log(weatherData.message);
      showToastMessage({ message: weatherData.message, type: "error" });
      return;
    }

    console.log("update global data");

    // update the global data
    updateGlobalData({
      data: weatherData,
      countryName: capitalize(countryName) ?? null,
      cityName,
    });

    console.log("update storage");

    // update into storage
    storeIntoStorage(weather);

    console.log("update weather");

    // display in the UI
    displayWeatherInfo();
  } catch (err) {
    console.log(err.message, "err");
    showToastMessage({ message: err.message, type: "error" });
    return;
  }
}
