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

export { getCountryInfoIntoArr };
