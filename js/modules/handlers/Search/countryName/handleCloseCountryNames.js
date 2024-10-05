import {
  countryNameOptionsContainer,
  modalCountryNameOptionsContainer,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";

export default function handleCloseCountryNames(e) {
  // close country name options after 500 ms
  setTimeout(() => {
    if (isModal(e)) {
      modalCountryNameOptionsContainer.innerHTML = "";
    } else {
      countryNameOptionsContainer.innerHTML = "";
    }
  }, 500);
}
