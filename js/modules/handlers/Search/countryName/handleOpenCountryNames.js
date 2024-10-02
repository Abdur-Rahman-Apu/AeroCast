import displayCountryNames from "../../../UI/countryName/displayCountryNames.js";
import { getCountryInfoIntoArr } from "../../../utilities/countryName.js";

export default function handleOpenCountryNames(e) {
  e.stopImmediatePropagation();
  console.log("Open country ");
  console.log(e.target.value, "country input value");
  const currentNameInputValue = e.target.value;

  // get country names arr
  const countryNames = getCountryInfoIntoArr(currentNameInputValue);

  console.log(countryNames, "country names");

  // display the country name suggestions
  displayCountryNames(countryNames);
}
