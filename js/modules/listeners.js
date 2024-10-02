import {
  cityNameInput,
  closeMenuBarContainer,
  countryNameOptionsContainer,
  humburgerContainer,
  nameInput,
} from "./elements.js";
import handleCloseMenubar from "./handlers/Menubar/handleCloseMenubar.js";
import handleOpenMenubar from "./handlers/Menubar/handleOpenMenubar.js";
import handleCloseCityNames from "./handlers/Search/cityName/handleCloseCityNames.js";
import handleFilterCityName from "./handlers/Search/cityName/handleFilterCityName.js";
import handleOpenCityNames from "./handlers/Search/cityName/handleOpenCityNames.js";
import handleCloseCountryNames from "./handlers/Search/countryName/handleCloseCountryNames.js";
import handleFilterCountryName from "./handlers/Search/countryName/handleFilterCountryName.js";
import handleOpenCountryNames from "./handlers/Search/countryName/handleOpenCountryNames.js";
import handleSelectCountryName from "./handlers/Search/countryName/handleSelectCountryName.js";
import { listenEvent } from "./utilities/domTask.js";

export default function listeners() {
  listenEvent(humburgerContainer, "click", handleOpenMenubar);
  listenEvent(closeMenuBarContainer, "click", handleCloseMenubar);
  listenEvent(nameInput, "focus", handleOpenCountryNames);
  listenEvent(nameInput, "blur", handleCloseCountryNames);
  listenEvent(nameInput, "keyup", handleFilterCountryName);
  // listenEvent(menubarContainer, "click", handleClickOnMenubar);
  listenEvent(countryNameOptionsContainer, "click", handleSelectCountryName);

  listenEvent(cityNameInput, "focus", handleOpenCityNames);
  listenEvent(cityNameInput, "blur", handleCloseCityNames);
  listenEvent(cityNameInput, "keyup", handleFilterCityName);
}
