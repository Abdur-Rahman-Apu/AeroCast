import countryInfo from "../../../assets/data/countryData.js";

const getCities = (country) => {
  console.log(country, "country name in the cities function");
  if (country in countryInfo) {
    return countryInfo[country].cities;
  }
};
export { getCities };
