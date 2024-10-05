import {
  cityNameInput,
  cityNameOptionsContainer,
  closeMenuBarContainer,
  closeModalContainer,
  countryNameOptionsContainer,
  humburgerContainer,
  largeScreenSearchBoxElm,
  menuForm,
  modalCityNameInput,
  modalCityNameOptionsContainer,
  modalCountryNameOptionsContainer,
  modalForm,
  modalNameInput,
  nameInput,
  transformUnitContainer,
} from "./elements.js";
import handleConvertUnit from "./handlers/convertUnit/handleConvertUnit.js";
import handleCloseMenubar from "./handlers/menubar/handleCloseMenubar.js";
import handleOpenMenubar from "./handlers/menubar/handleOpenMenubar.js";
import handleCloseModal from "./handlers/modal/handleCloseModal.js";
import handleOpenModal from "./handlers/modal/handleOpenModal.js";
import handleCloseCityNames from "./handlers/search/cityName/handleCloseCityNames.js";
import handleFilterCityName from "./handlers/search/cityName/handleFilterCityName.js";
import handleOpenCityNames from "./handlers/search/cityName/handleOpenCityNames.js";
import handleSelectCityName from "./handlers/search/cityName/handleSelectCityName.js";
import handleCloseCountryNames from "./handlers/search/countryName/handleCloseCountryNames.js";
import handleFilterCountryName from "./handlers/search/countryName/handleFilterCountryName.js";
import handleOpenCountryNames from "./handlers/search/countryName/handleOpenCountryNames.js";
import handleSelectCountryName from "./handlers/search/countryName/handleSelectCountryName.js";
import handleSubmitForm from "./handlers/search/form/handleSubmitForm.js";
import { listenEvent } from "./utilities/domTask.js";

export default function listeners() {
  // unit change: celsius and fahrenheit conversion
  listenEvent(transformUnitContainer, "click", handleConvertUnit);

  // humburger menu
  listenEvent(humburgerContainer, "click", handleOpenMenubar);
  listenEvent(closeMenuBarContainer, "click", handleCloseMenubar);

  // for mobile and tab
  if (screen.width < 1024) {
    listenEvent(menuForm, "submit", handleSubmitForm);

    listenEvent(nameInput, "focus", handleOpenCountryNames);
    listenEvent(nameInput, "blur", handleCloseCountryNames);
    listenEvent(nameInput, "keyup", handleFilterCountryName);
    listenEvent(countryNameOptionsContainer, "click", handleSelectCountryName);

    listenEvent(cityNameInput, "focus", handleOpenCityNames);
    listenEvent(cityNameInput, "blur", handleCloseCityNames);
    listenEvent(cityNameInput, "keyup", handleFilterCityName);
    listenEvent(cityNameOptionsContainer, "click", handleSelectCityName);
  }

  // for laptop and large screen
  if (screen.width >= 1024) {
    listenEvent(largeScreenSearchBoxElm, "click", handleOpenModal);
    listenEvent(closeModalContainer, "click", handleCloseModal);
    listenEvent(modalForm, "submit", handleSubmitForm);
    listenEvent(modalNameInput, "focus", handleOpenCountryNames);
    listenEvent(modalNameInput, "blur", handleCloseCountryNames);
    listenEvent(modalNameInput, "keyup", handleFilterCountryName);
    listenEvent(
      modalCountryNameOptionsContainer,
      "click",
      handleSelectCountryName
    );

    listenEvent(modalCityNameInput, "focus", handleOpenCityNames);
    listenEvent(modalCityNameInput, "blur", handleCloseCityNames);
    listenEvent(modalCityNameInput, "keyup", handleFilterCityName);
    listenEvent(modalCityNameOptionsContainer, "click", handleSelectCityName);
  }
}
