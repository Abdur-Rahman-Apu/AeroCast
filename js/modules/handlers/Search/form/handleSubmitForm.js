import apiKey from "../../../../api.js";
import { cityNameInput, nameInput } from "../../../elements.js";
import getWeatherInfo from "../../../utilities/getWeatherInfo.js";

export default async function handleSubmitForm(e) {
  e.preventDefault();
  console.log("Form submit");

  const countryName = nameInput.value;
  const cityName = cityNameInput.value;

  console.log(countryName, cityName);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  //   if (cityName) {
  //     url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;
  //   }

  // send api request
  try {
    const weatherData = await getWeatherInfo(url);
    console.log(weatherData);

    if (weatherData.cod === "400" || weatherData.cod === "404") {
      console.log(weatherData.message);
    }
  } catch (err) {
    console.log(err.message, "err");
  }

  //   console.log(weatherData);
}
