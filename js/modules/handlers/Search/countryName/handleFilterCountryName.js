import { countryFlag } from "../../../elements.js";
import displayCountryNames from "../../../UI/countryName/displayCountryNames.js";
import { getCountryInfoIntoArr } from "../../../utilities/countryName.js";
import { lowerCase } from "../../../utilities/stringFn.js";

export default function handleFilterCountryName(e) {
  e.stopImmediatePropagation();
  console.log(e.target.value, "value is type name input");
  const countryNameInputValue = e.target.value;

  console.log(e.keyCode);

  const countryNames = getCountryInfoIntoArr(countryNameInputValue);

  console.log(countryNames, "country names");

  const isTypedCountryMatched =
    countryNames.length === 1 &&
    lowerCase(countryNames[0].name) === lowerCase(countryNameInputValue);

  if (isTypedCountryMatched) {
    countryFlag.src = countryNames[0].flag;
  } else {
    countryFlag.src = "./assets/images/flag.png";
    displayCountryNames(countryNames);
  }
}
