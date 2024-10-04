import {
  countryNameOptionsContainer,
  modalCountryNameOptionsContainer,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";

export default function handleCloseCountryNames(e) {
  console.log(e.target, e, "close country");
  console.log(isModal(e));
  console.log("close country names");
  setTimeout(() => {
    if (isModal(e)) {
      modalCountryNameOptionsContainer.innerHTML = "";
    } else {
      countryNameOptionsContainer.innerHTML = "";
    }
  }, 500);
}
