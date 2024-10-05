import {
  countryFlag,
  countryNameOptionsContainer,
  modalCountryFlag,
  modalCountryNameOptionsContainer,
  modalNameInput,
  nameInput,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";

function updateCountryInfo({ nameInput, countryFlag, flagUrl, countryName }) {
  nameInput.value = countryName;

  countryFlag.src = flagUrl;

  // trigger an event programmatically
  const event = new Event("keyup");

  nameInput.dispatchEvent(event);
}

export default function handleSelectCountryName(e) {
  // get the clicked country name
  const countryName = e.target.dataset.country;

  if (countryName) {
    // if country name exist, update the flag image
    let flagUrl = "";

    if (e.target.tagName === "P") {
      flagUrl = e.target.previousElementSibling.getAttribute("src");
    } else if (e.target.tagName === "DIV") {
      flagUrl = e.target.children[0].src;
    } else {
      flagUrl = e.target.getAttribute("src");
    }

    const updateInfo = {
      nameInput: isModal(e) ? modalNameInput : nameInput,
      countryFlag: isModal(e) ? modalCountryFlag : countryFlag,
      countryName,
      flagUrl,
    };

    updateCountryInfo(updateInfo);
  }

  // hide the countries list
  isModal(e)
    ? (modalCountryNameOptionsContainer.innerHTML = "")
    : (countryNameOptionsContainer.innerHTML = "");
}
