import {
  cityNameInput,
  cityNameOptionsContainer,
  modalCityNameInput,
  modalCityNameOptionsContainer,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";

export default function handleSelectCityName(e) {
  // update the city input value and hide the cities list

  const cityName = e.target.innerText;

  if (cityName && !isModal(e)) {
    cityNameInput.value = cityName;
    cityNameOptionsContainer.innerHTML = "";
  } else {
    modalCityNameInput.value = cityName;
    modalCityNameOptionsContainer.innerHTML = "";
  }
}
