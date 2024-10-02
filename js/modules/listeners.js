import {
  closeMenuBarContainer,
  humburgerContainer,
  nameInput,
} from "./elements.js";
import handleCloseMenubar from "./handlers/Menubar/handleCloseMenubar.js";
import handleOpenMenubar from "./handlers/Menubar/handleOpenMenubar.js";
import handleCloseCountryNames from "./handlers/Search/countryName/handleCloseCountryNames.js";
import handleOpenCountryNames from "./handlers/Search/countryName/handleOpenCountryNames.js";
import { listenEvent } from "./utilities/domTask.js";

export default function listeners() {
  listenEvent(humburgerContainer, "click", handleOpenMenubar);
  listenEvent(closeMenuBarContainer, "click", handleCloseMenubar);
  listenEvent(nameInput, "focus", handleOpenCountryNames);
  listenEvent(nameInput, "blur", handleCloseCountryNames);
}
