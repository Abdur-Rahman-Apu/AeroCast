import {
  cityNameOptionsContainer,
  modalCityNameOptionsContainer,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";

export default function handleCloseCityNames(e) {
  // close the cities list
  setTimeout(() => {
    isModal(e)
      ? (modalCityNameOptionsContainer.innerHTML = "")
      : (cityNameOptionsContainer.innerHTML = "");
  }, 500);
}
