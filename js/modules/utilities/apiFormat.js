import apiKey from "../../api.js";
import { apiUrl, weather } from "../../config.js";
import { getCountryCode } from "./countryName.js";
import { capitalize } from "./stringFn.js";

export default function apiFormat({ countryName, cityName }) {
  let url = `${apiUrl}?q=${countryName}&appid=${apiKey}&units=${weather.unit}`;

  if (cityName) {
    const countryCode = getCountryCode(capitalize(countryName));

    url = `${apiUrl}?q=${cityName},${countryCode}&appid=${apiKey}&units=${weather.unit}`;
  }

  return url;
}
