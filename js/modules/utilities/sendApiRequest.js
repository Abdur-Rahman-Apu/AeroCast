import apiFormat from "./apiFormat.js";
import getWeatherInfo from "./getWeatherInfo.js";

export default async function sendApiRequest({ countryName, cityName }) {
  console.log(countryName, cityName);

  const url = apiFormat({ countryName, cityName });

  await getWeatherInfo({ url, countryName, cityName });
}
