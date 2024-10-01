import { selectElm } from "./utilities/domTask.js";

const humburgerContainer = selectElm(".humburger-menu");
const closeMenuBarContainer = selectElm(".close-menubar");
const menubarContainer = selectElm(".menu-bar-overlay");
const menubarItemsContainer = selectElm(".menu-bar-items");
export {
  closeMenuBarContainer,
  humburgerContainer,
  menubarContainer,
  menubarItemsContainer,
};
