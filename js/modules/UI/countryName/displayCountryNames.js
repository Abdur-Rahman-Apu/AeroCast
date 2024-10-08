import {
  countryNameOptionsContainer,
  modalCountryNameOptionsContainer,
} from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";
import isModal from "../isModal/isModal.js";

export default function displayCountryNames(e, countryNames) {
  // html markup with country name and country flag
  const countryNameInfoHtml = countryNames
    .map((item) => {
      return `
        <div data-country="${item.name}">
            <img src="${item.flag}" alt="This is indicating the ${item.name} flag image" data-country="${item.name}">
            <p data-country="${item.name}">${item.name}</p>
        </div>
    `;
    })
    .join("");

  // added style for modal country name options and menu country name options based on the condition
  if (isModal(e)) {
    modalCountryNameOptionsContainer.innerHTML = countryNameInfoHtml;

    addStyle(modalCountryNameOptionsContainer, { height: "auto" });
  } else {
    countryNameOptionsContainer.innerHTML = countryNameInfoHtml;

    addStyle(countryNameOptionsContainer, { height: "auto" });
  }
}
