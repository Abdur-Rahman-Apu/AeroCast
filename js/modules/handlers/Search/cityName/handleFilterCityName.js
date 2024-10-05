import { modalNameInput, nameInput } from "../../../elements.js";
import displayCityNames from "../../../UI/cityName/displayCityNames.js";
import isModal from "../../../UI/isModal/isModal.js";
import { getCities } from "../../../utilities/cityName.js";
import {
  capitalize,
  isInclude,
  lowerCase,
} from "../../../utilities/stringFn.js";

// filter the cities list based on the user input
export default function handleFilterCityName(e) {
  const cityName = e.target.value;

  const countryName = capitalize(
    isModal(e) ? modalNameInput.value : nameInput.value
  );

  // get cities of the country
  const cities = getCities(countryName);

  let filteredCities = [];

  if (cityName) {
    // filter cities based on the user input
    filteredCities = cities.filter((city) =>
      isInclude(lowerCase(city), lowerCase(cityName))
    );
  } else {
    // insert all cities
    filteredCities = cities;
  }

  // display cities
  displayCityNames(e, filteredCities);
}
