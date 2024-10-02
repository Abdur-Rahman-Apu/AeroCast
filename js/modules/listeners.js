import {
  closeMenuBarContainer,
  countryNameOptionsContainer,
  humburgerContainer,
  nameInput,
} from "./elements.js";
import handleCloseMenubar from "./handlers/Menubar/handleCloseMenubar.js";
import handleOpenMenubar from "./handlers/Menubar/handleOpenMenubar.js";
import handleFilterCountryName from "./handlers/Search/countryName/handleFilterCountryName.js";
import handleOpenCountryNames from "./handlers/Search/countryName/handleOpenCountryNames.js";
import handleSelectCountryName from "./handlers/Search/countryName/handleSelectCountryName.js";
import { listenEvent } from "./utilities/domTask.js";

export default function listeners() {
  listenEvent(humburgerContainer, "click", handleOpenMenubar);
  listenEvent(closeMenuBarContainer, "click", handleCloseMenubar);
  listenEvent(nameInput, "focus", handleOpenCountryNames);
  // listenEvent(nameInput, "blur", handleCloseCountryNames);
  listenEvent(nameInput, "keyup", handleFilterCountryName);
  listenEvent(countryNameOptionsContainer, "click", handleSelectCountryName);
}
