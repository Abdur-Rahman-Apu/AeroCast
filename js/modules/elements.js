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
  cityErrMsg,
  cityNameInput,
  cityNameOptionsContainer,
  closeMenuBarContainer,
  cloudPercentage,
  countryErrMsg,
  countryFlag,
  countryNameInputContainer,
  countryNameOptionsContainer,
  dataUpdateTime,
  feelLikeValue,
  form,
  header,
  humburgerContainer,
  humidityValue,
  locationFlag,
  locationName,
  maxTempValue,
  menubarContainer,
  menubarItemsContainer,
  minTempValue,
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
