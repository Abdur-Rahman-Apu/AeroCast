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
import handleConvertUnit from "./handlers/ConvertUnit/handleConvertUnit.js";
import handleCloseMenubar from "./handlers/Menubar/handleCloseMenubar.js";
import handleOpenMenubar from "./handlers/Menubar/handleOpenMenubar.js";
import handleCloseModal from "./handlers/modal/handleCloseModal.js";
import handleOpenModal from "./handlers/modal/handleOpenModal.js";
import handleCloseCityNames from "./handlers/Search/cityName/handleCloseCityNames.js";
import handleFilterCityName from "./handlers/Search/cityName/handleFilterCityName.js";
import handleOpenCityNames from "./handlers/Search/cityName/handleOpenCityNames.js";
import handleSelectCityName from "./handlers/Search/cityName/handleSelectCityName.js";
import handleCloseCountryNames from "./handlers/Search/countryName/handleCloseCountryNames.js";
import handleFilterCountryName from "./handlers/Search/countryName/handleFilterCountryName.js";
import handleOpenCountryNames from "./handlers/Search/countryName/handleOpenCountryNames.js";
import handleSelectCountryName from "./handlers/Search/countryName/handleSelectCountryName.js";
import handleSubmitForm from "./handlers/Search/form/handleSubmitForm.js";
import { listenEvent } from "./utilities/domTask.js";

export default function listeners() {
  listenEvent(humburgerContainer, "click", handleOpenMenubar);
  listenEvent(closeMenuBarContainer, "click", handleCloseMenubar);

  listenEvent(transformUnitContainer, "click", handleConvertUnit);

  if (screen.width < 1024) {
    listenEvent(menuForm, "submit", handleSubmitForm);

    listenEvent(nameInput, "focus", handleOpenCountryNames);
    listenEvent(nameInput, "blur", handleCloseCountryNames);
    listenEvent(nameInput, "keyup", handleFilterCountryName);
    // listenEvent(menubarContainer, "click", handleClickOnMenubar);
    listenEvent(countryNameOptionsContainer, "click", handleSelectCountryName);

    listenEvent(cityNameInput, "focus", handleOpenCityNames);
    listenEvent(cityNameInput, "blur", handleCloseCityNames);
    listenEvent(cityNameInput, "keyup", handleFilterCityName);
    listenEvent(cityNameOptionsContainer, "click", handleSelectCityName);
  }

  if (screen.width >= 1024) {
    listenEvent(largeScreenSearchBoxElm, "click", handleOpenModal);
    listenEvent(closeModalContainer, "click", handleCloseModal);
    listenEvent(modalForm, "submit", handleSubmitForm);
    listenEvent(modalNameInput, "focus", handleOpenCountryNames);
    listenEvent(modalNameInput, "blur", handleCloseCountryNames);
    listenEvent(modalNameInput, "keyup", handleFilterCountryName);
    // listenEvent(menubarContainer, "click", handleClickOnMenubar);
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
