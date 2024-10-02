import { selectElm } from "./utilities/domTask.js";

const humburgerContainer = selectElm(".humburger-menu");
const closeMenuBarContainer = selectElm(".close-menubar");
const menubarContainer = selectElm(".menu-bar-overlay");
const menubarItemsContainer = selectElm(".menu-bar-items");
const countryNameInputContainer = selectElm(".country-name-input");
const nameInput = selectElm("#country-name");
const countryNameOptionsContainer = selectElm(".country-name-options");
export {
  closeMenuBarContainer,
  countryNameInputContainer,
  countryNameOptionsContainer,
  humburgerContainer,
  menubarContainer,
  menubarItemsContainer,
  nameInput,
};
