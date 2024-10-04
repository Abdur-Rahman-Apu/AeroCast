import { modalNameInput, nameInput } from "../../../elements.js";
import displayCityNames from "../../../UI/cityName/displayCityNames.js";
import isModal from "../../../UI/isModal/isModal.js";
import { getCities } from "../../../utilities/cityName.js";
import { capitalize } from "../../../utilities/stringFn.js";

export default function handleOpenCityNames(e) {
  const countryInputValue = isModal(e) ? modalNameInput.value : nameInput.value;

  if (countryInputValue) {
    const cities = getCities(capitalize(countryInputValue));

    console.log(cities, "cities");

    cities && cities.length > 0 && displayCityNames(e, cities);
  }
}
