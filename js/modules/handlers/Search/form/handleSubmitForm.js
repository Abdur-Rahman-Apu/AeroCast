import { cityNameInput, nameInput } from "../../../elements.js";
import apiFormat from "../../../utilities/apiFormat.js";
import getWeatherInfo from "../../../utilities/getWeatherInfo.js";

export default async function handleSubmitForm(e) {
  e.preventDefault();
  console.log("Form submit");

  const countryName = nameInput.value;
  const cityName = cityNameInput.value;

  console.log(countryName, cityName);

  const url = apiFormat({ countryName, cityName });

  // send api request
  // try {
  //   const weatherData = await getWeatherInfo(url);
  //   console.log(weatherData);

  //   if (weatherData.cod === "400" || weatherData.cod === "404") {
  //     console.log(weatherData.message);
  //     showToastMessage({ message: weatherData.message, type: "error" });
  //     return;
  //   }

  //   // update the global data
  //   weather.data = weatherData;

  //   // update into storage
  //   storeIntoStorage(weather);
  // } catch (err) {
  //   console.log(err.message, "err");
  //   showToastMessage({ message: err.message, type: "error" });
  //   return;
  // }

  //   console.log(weatherData);

  await getWeatherInfo({ url, countryName, cityName });
}
