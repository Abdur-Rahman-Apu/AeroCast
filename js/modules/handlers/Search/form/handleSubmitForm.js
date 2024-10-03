import apiKey from "../../../../api.js";
import { weather } from "../../../../config.js";
import { cityNameInput, nameInput } from "../../../elements.js";
import storeIntoStorage from "../../../storage/storeIntoStorage.js";
import showToastMessage from "../../../UI/toastMessage/showToastMessage.js";
import { getCountryCode } from "../../../utilities/countryName.js";
import getWeatherInfo from "../../../utilities/getWeatherInfo.js";
import { capitalize } from "../../../utilities/stringFn.js";

export default async function handleSubmitForm(e) {
  e.preventDefault();
  console.log("Form submit");

  const countryName = nameInput.value;
  const cityName = cityNameInput.value;

  console.log(countryName, cityName);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;

  if (cityName) {
    const countryCode = getCountryCode(capitalize(countryName));

    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}`;
  }

  // send api request
  try {
    const weatherData = await getWeatherInfo(url);
    console.log(weatherData);

    if (weatherData.cod === "400" || weatherData.cod === "404") {
      console.log(weatherData.message);
      showToastMessage({ message: weatherData.message, type: "error" });
      return;
    }

    // update the global data
    weather.data = weatherData;

    // update into storage
    storeIntoStorage(weather);
  } catch (err) {
    console.log(err.message, "err");
    showToastMessage({ message: err.message, type: "error" });
    return;
  }

  //   console.log(weatherData);
}
