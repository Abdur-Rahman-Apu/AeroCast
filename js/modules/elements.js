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

const locationName = selectElm(".location-name");
const locationFlag = selectElm(".location-flag");
const todayDate = selectElm(".day");
const todayTime = selectElm(".time");
const weatherType = selectElm(".weather-type");
const cloudPercentage = selectElm(".cloud-percentage");
const weatherIcon = selectElm(".weather-icon");
const temperatureValue = selectElm(".temperature");
const temperatureType = selectElm(".temperature-type");

const feelLikeValue = selectElm(".feel-like-value");
const humidityValue = selectElm(".humidity-value");
const windValue = selectElm(".wind-value");
const windUnit = selectElm(".wind-unit");
const sunriseValue = selectElm(".sunrise-value");
const sunsetValue = selectElm(".sunset-value");

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
  feelLikeValue,
  form,
  humburgerContainer,
  humidityValue,
  locationFlag,
  locationName,
  menubarContainer,
  menubarItemsContainer,
  nameInput,
  submitBtn,
  sunriseValue,
  sunsetValue,
  temperatureType,
  temperatureValue,
  toastMessage,
  toastMessageContainer,
  todayDate,
  todayTime,
  weatherIcon,
  weatherType,
  windUnit,
  windValue,
};
