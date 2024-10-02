import { selectElm } from "./utilities/domTask.js";

const humburgerContainer = selectElm(".humburger-menu");
const closeMenuBarContainer = selectElm(".close-menubar");
const menubarContainer = selectElm(".menu-bar-overlay");
const menubarItemsContainer = selectElm(".menu-bar-items");

const countryNameInputContainer = selectElm(".country-name-input");
const nameInput = selectElm("#country-name");
const countryFlag = selectElm(".country-flag");
const countryNameOptionsContainer = selectElm(".country-name-options");
const countryErrMsg = selectElm(".name-input-err-msg");

const cityNameInput = selectElm("#city-name");
const cityErrMsg = selectElm(".city-input-err-msg");

const submitBtn = selectElm('input[type="submit"');

export {
  cityErrMsg,
  cityNameInput,
  closeMenuBarContainer,
  countryErrMsg,
  countryFlag,
  countryNameInputContainer,
  countryNameOptionsContainer,
  humburgerContainer,
  menubarContainer,
  menubarItemsContainer,
  nameInput,
  submitBtn,
};
