import {
  cityNameOptionsContainer,
  modalCityNameOptionsContainer,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";

export default function handleCloseCityNames(e) {
  console.log("close country names");
  setTimeout(() => {
    isModal(e)
      ? (modalCityNameOptionsContainer.innerHTML = "")
      : (cityNameOptionsContainer.innerHTML = "");
  }, 500);
}
