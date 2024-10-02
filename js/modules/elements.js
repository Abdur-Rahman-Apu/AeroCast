import { selectElm } from "./utilities/domTask.js";

const humburgerContainer = selectElm(".humburger-menu");
const closeMenuBarContainer = selectElm(".close-menubar");
const menubarContainer = selectElm(".menu-bar-overlay");
const menubarItemsContainer = selectElm(".menu-bar-items");

const form = selectElm("form");

const countryNameInputContainer = selectElm(".country-name-input");
const nameInput = selectElm("#country-name");
const countryFlag = selectElm(".country-flag");
const countryNameOptionsContainer = selectElm(".country-name-options");
const countryErrMsg = selectElm(".name-input-err-msg");

const cityNameInput = selectElm("#city-name");
const cityErrMsg = selectElm(".city-input-err-msg");
const cityNameOptionsContainer = selectElm(".city-name-options");

const submitBtn = selectElm('input[type="submit"');

export {
  cityErrMsg,
  cityNameInput,
  cityNameOptionsContainer,
  closeMenuBarContainer,
  countryErrMsg,
  countryFlag,
  countryNameInputContainer,
  countryNameOptionsContainer,
  form,
  humburgerContainer,
  menubarContainer,
  menubarItemsContainer,
  nameInput,
  submitBtn,
};
