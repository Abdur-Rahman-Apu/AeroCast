import {
  cityNameInput,
  cityNameOptionsContainer,
  modalCityNameInput,
  modalCityNameOptionsContainer,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";

export default function handleSelectCityName(e) {
  console.log(e.target);
  console.log(e.target.innerText);

  const cityName = e.target.innerText;

  if (cityName && !isModal(e)) {
    cityNameInput.value = cityName;
    cityNameOptionsContainer.innerHTML = "";
  } else {
    modalCityNameInput.value = cityName;
    modalCityNameOptionsContainer.innerHTML = "";
  }
}
