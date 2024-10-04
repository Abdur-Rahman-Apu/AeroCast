import { countryFlag, modalCountryFlag } from "../../../elements.js";
import displayCountryNames from "../../../UI/countryName/displayCountryNames.js";
import isModal from "../../../UI/isModal/isModal.js";
import { getCountryInfoIntoArr } from "../../../utilities/countryName.js";
import { lowerCase } from "../../../utilities/stringFn.js";
import toggleCityName from "../cityName/toggleCityName.js";
import toggleSubmitBtn from "../SubmitBtn/toggleSubmitBtn.js";

export default function handleFilterCountryName(e) {
  console.log(e.target.value, "value is type name input");
  const countryNameInputValue = e.target.value;

  console.log(e.keyCode);

  const countryNames = getCountryInfoIntoArr(countryNameInputValue);

  console.log(countryNames, "country names");

  const isTypedCountryMatched =
    countryNames.length === 1 &&
    lowerCase(countryNames[0].name) === lowerCase(countryNameInputValue);

  let countryFlagElm = isModal(e) ? modalCountryFlag : countryFlag;

  if (isTypedCountryMatched) {
    countryFlagElm.src = countryNames[0].flag;
  } else {
    countryFlagElm.src = "./assets/images/flag.png";
    displayCountryNames(e, countryNames);
  }

  // toggle submit button and enable city name input for holding minimum 4 characters of the country name
  if (countryNameInputValue.length >= 4) {
    toggleCityName({ targetElm: e, isDisabled: false });
    toggleSubmitBtn({ targetElm: e, isDisabled: false });
  } else {
    toggleCityName({ targetElm: e, isDisabled: true });
    toggleSubmitBtn({ targetElm: e, isDisabled: true });
  }
}
