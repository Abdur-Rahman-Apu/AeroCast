import countryInfo from "../../../assets/data/countryData.js";
import { isInclude, lowerCase } from "./stringFn.js";

const getCountryInfoWithName = (searchValue) => {
  let filteredCountryList = [];
  for (const country in countryInfo) {
    const transformCountryData = {
      name: country,
      ...countryInfo[country],
    };

    if (searchValue) {
      if (isInclude(lowerCase(country), lowerCase(searchValue))) {
        filteredCountryList.push(transformCountryData);
      }
      continue;
    }

    filteredCountryList.push(transformCountryData);
  }

  return filteredCountryList;
};

const getCountryInfoIntoArr = (value) => {
  return getCountryInfoWithName(value);
};

const getCountryCode = (countryName) => {
  console.log(countryInfo[countryName].code);
  return countryInfo[countryName].code;
};

const getCountryNameFromCountryCode = (code) => {
  for (const country in countryInfo) {
    if (countryInfo[country].code === code) {
      return country;
    }
  }
};

export { getCountryCode, getCountryInfoIntoArr, getCountryNameFromCountryCode };
