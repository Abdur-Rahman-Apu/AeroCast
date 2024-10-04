import { selectElm } from "./utilities/domTask.js";

const humburgerContainer = selectElm(".humburger-menu");
const closeMenuBarContainer = selectElm(".close-menubar");
const menubarContainer = selectElm(".menu-bar-overlay");
const menubarItemsContainer = selectElm(".menu-bar-items");

const menuForm = selectElm("#menu-form");

const countryNameInputContainer = selectElm(".country-name-input");
const nameInput = selectElm("#country-name");
const countryFlag = selectElm(".country-flag");
const countryNameOptionsContainer = selectElm(".country-name-options");

const cityNameInput = selectElm("#city-name");
const cityNameOptionsContainer = selectElm(".city-name-options");

const submitBtn = selectElm('input[type="submit"');

const modalOverlayContainer = selectElm(".modal-overlay");
const closeModalContainer = selectElm(".close-modal");

const modalForm = selectElm("#modal-form");

const modalCountryNameInputContainer = selectElm(
  "#modal-form .country-name-input"
);
const modalNameInput = selectElm("#modal-form #country-name");
const modalCountryFlag = selectElm("#modal-form .country-flag");
const modalCountryNameOptionsContainer = selectElm(
  "#modal-form .country-name-options"
);

const modalCityNameInput = selectElm("#modal-form #city-name");

const modalCityNameOptionsContainer = selectElm(
  "#modal-form .city-name-options"
);

const modalSubmitBtn = selectElm('#modal-form input[type="submit"');

const toastMessageContainer = selectElm(".toast-message-container");
const toastMessage = selectElm(".toast-message");

const sidebarUpperTopContainer = selectElm(".sidebar-upper-top");
const locationName = selectElm(".location-name");
const locationFlag = selectElm(".location-flag");

const weatherType = selectElm(".weather-type");
const cloudPercentage = selectElm(".cloud-percentage");
const weatherIcon = selectElm(".weather-type-icon");
const temperatureValue = selectElm(".temperature");
const temperatureType = selectElm(".temperature-type");

const header = selectElm(".header");
const transformUnitContainer = selectElm(".transform-unit");
const transformUnitCelcius = selectElm(".transform-unit-celcius");
const transformUnitFarenhite = selectElm(".transform-unit-farenhite");

const dataUpdateTime = selectElm(".data-update-time");
const feelLikeValue = selectElm(".feel-like-value");
const humidityValue = selectElm(".humidity-value");
const windValue = selectElm(".wind-value");
const windUnit = selectElm(".wind-unit");
const sunriseValue = selectElm(".sunrise-value");
const sunsetValue = selectElm(".sunset-value");
const pressureValue = selectElm(".pressure-value");
const maxTempValue = selectElm(".max-temp-value");
const minTempValue = selectElm(".min-temp-value");

export {
  cityNameInput,
  cityNameOptionsContainer,
  closeMenuBarContainer,
  closeModalContainer,
  cloudPercentage,
  countryFlag,
  countryNameInputContainer,
  countryNameOptionsContainer,
  dataUpdateTime,
  feelLikeValue,
  header,
  humburgerContainer,
  humidityValue,
  locationFlag,
  locationName,
  maxTempValue,
  menubarContainer,
  menubarItemsContainer,
  menuForm,
  minTempValue,
  modalCityNameInput,
  modalCityNameOptionsContainer,
  modalCountryFlag,
  modalCountryNameInputContainer,
  modalCountryNameOptionsContainer,
  modalForm,
  modalNameInput,
  modalOverlayContainer,
  modalSubmitBtn,
  nameInput,
  pressureValue,
  sidebarUpperTopContainer,
  submitBtn,
  sunriseValue,
  sunsetValue,
  temperatureType,
  temperatureValue,
  toastMessage,
  toastMessageContainer,
  transformUnitCelcius,
  transformUnitContainer,
  transformUnitFarenhite,
  weatherIcon,
  weatherType,
  windUnit,
  windValue,
};
