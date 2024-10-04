import {
  cityNameOptionsContainer,
  modalCityNameOptionsContainer,
} from "../../elements.js";
import isModal from "../isModal/isModal.js";

export default function displayCityNames(e, cities) {
  const htmlMarkup = cities
    .map((item) => {
      return `<p data-city=${item}>${item}</p>`;
    })
    .join("");

  isModal(e)
    ? (modalCityNameOptionsContainer.innerHTML = htmlMarkup)
    : (cityNameOptionsContainer.innerHTML = htmlMarkup);
}
