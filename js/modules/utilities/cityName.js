import countryInfo from "../../../assets/data/countryData.js";

const getCities = (country) => {
  if (country in countryInfo) {
    return countryInfo[country].cities;
  }
};
export { getCities };
