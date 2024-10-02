import { nameInput } from "../../../elements.js";
import displayCityNames from "../../../UI/cityName/displayCityNames.js";
import { getCities } from "../../../utilities/cityName.js";
import {
  capitalize,
  isInclude,
  lowerCase,
} from "../../../utilities/stringFn.js";

export default function handleFilterCityName(e) {
  const cityName = e.target.value;
  console.log(cityName, "city name");

  const countryName = capitalize(nameInput.value);
  console.log(countryName, "country name");
  const cities = getCities(countryName);

  let filteredCities = [];
  if (cityName) {
    filteredCities = cities.filter((city) =>
      isInclude(lowerCase(city), lowerCase(cityName))
    );
  } else {
    filteredCities = cities;
  }

  displayCityNames(filteredCities);
}
