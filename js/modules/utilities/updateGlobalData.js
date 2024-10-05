import { weather } from "../../config.js";
import {
  getCountryCode,
  getCountryNameFromCountryCode,
} from "./countryName.js";

export default function updateGlobalData({ data, countryName, cityName }) {
  // checking country name existence
  if (countryName) {
    // if country name exist

    // get country code from the country name
    const countryCode = getCountryCode(countryName);

    // checking city name existence and update the global weather data
    if (cityName) {
      weather.cityName = cityName;
    } else {
      weather.cityName = null;
    }

    // update the global weather data
    Object.assign(weather, { data, countryName, countryCode });
  } else {
    // country name is not found

    // values of the data variable is got from the api
    const {
      name,
      sys: { country: code },
    } = data;

    // get the country name from the country code
    const countryNameFromCode = getCountryNameFromCountryCode(code);

    // update the global variable weather
    Object.assign(weather, {
      data,
      countryName: countryNameFromCode,
      cityName: name,
      countryCode: code,
    });
  }
}
