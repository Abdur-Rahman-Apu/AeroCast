import apiFormat from "./apiFormat.js";
import getWeatherInfo from "./getWeatherInfo.js";

// send api request
export default async function sendApiRequest({ countryName, cityName }) {
  const url = apiFormat({ countryName, cityName });

  await getWeatherInfo({ url, countryName, cityName });
}
