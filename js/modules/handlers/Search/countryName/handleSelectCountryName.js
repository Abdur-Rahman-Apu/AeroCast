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
  // countryFlag.setAttribute("src", flagUrl);
  countryFlag.src = flagUrl;

  // trigger an event programmatically

  console.log(nameInput);

  const event = new Event("keyup");

  nameInput.dispatchEvent(event);
}

export default function handleSelectCountryName(e) {
  console.log("select country name");
  console.log(e.target);
  console.log(e.target.innerText);

  const countryName = e.target.dataset.country;

  console.log(countryName, "country name");
  console.log(e.target.tagName, "type");

  if (countryName) {
    let flagUrl = "";
    if (e.target.tagName === "P") {
      console.log(e.target.previousElementSibling, "pres");
      flagUrl = e.target.previousElementSibling.getAttribute("src");
    } else if (e.target.tagName === "DIV") {
      console.log(e.target.children[0], "child");
      flagUrl = e.target.children[0].src;
    } else {
      console.log(e.target.src, "img");
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

  isModal(e)
    ? (modalCountryNameOptionsContainer.innerHTML = "")
    : (countryNameOptionsContainer.innerHTML = "");
}
