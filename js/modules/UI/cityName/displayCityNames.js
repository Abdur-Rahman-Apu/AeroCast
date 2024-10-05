import {
  cityNameOptionsContainer,
  modalCityNameOptionsContainer,
} from "../../elements.js";
import isModal from "../isModal/isModal.js";

export default function displayCityNames(e, cities) {
  // html markup of cities
  const htmlMarkup = cities
    .map((item) => {
      return `<p data-city=${item}>${item}</p>`;
    })
    .join("");

  // update for either modal or menu based on the target element
  isModal(e)
    ? (modalCityNameOptionsContainer.innerHTML = htmlMarkup)
    : (cityNameOptionsContainer.innerHTML = htmlMarkup);
}
