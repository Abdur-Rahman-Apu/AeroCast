import { weather } from "../../config.js";
import {
  getCountryCode,
  getCountryNameFromCountryCode,
} from "./countryName.js";

export default function updateGlobalData({ data, countryName, cityName }) {
  console.log(data, countryName, cityName);
  if (countryName) {
    const countryCode = getCountryCode(countryName);

    console.log(getCountryCode, "country code");
    if (cityName) {
      weather.cityName = cityName;
    } else {
      weather.cityName = null;
    }
    Object.assign(weather, { data, countryName, countryCode });
    // weather = { ...weather, data, countryName, countryCode };
  } else {
    const {
      name,
      sys: { country: code },
    } = data;

    console.log(data, "upgd");

    const countryNameFromCode = getCountryNameFromCountryCode(code);

    // weather = {
    //   ...weather,
    //   data,
    //   countryName,
    //   cityName: name,
    //   countryCode: country,
    // };

    Object.assign(weather, {
      data,
      countryName: countryNameFromCode,
      cityName: name,
      countryCode: code,
    });
  }
}
