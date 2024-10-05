import { modalNameInput, nameInput } from "../../../elements.js";
import displayCityNames from "../../../UI/cityName/displayCityNames.js";
import isModal from "../../../UI/isModal/isModal.js";
import { getCities } from "../../../utilities/cityName.js";
import { capitalize } from "../../../utilities/stringFn.js";

export default function handleOpenCityNames(e) {
  // decide the country input value based on the target element
  const countryInputValue = isModal(e) ? modalNameInput.value : nameInput.value;

  // get cities of the country and display cities
  if (countryInputValue) {
    const cities = getCities(capitalize(countryInputValue));

    cities && cities.length > 0 && displayCityNames(e, cities);
  }
}
