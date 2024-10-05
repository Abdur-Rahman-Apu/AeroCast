import displayCountryNames from "../../../UI/countryName/displayCountryNames.js";
import { getCountryInfoIntoArr } from "../../../utilities/countryName.js";

export default function handleOpenCountryNames(e) {
  const currentNameInputValue = e.target.value;

  // get country names arr
  const countryNames = getCountryInfoIntoArr(currentNameInputValue);

  // display the country name suggestions
  displayCountryNames(e, countryNames);
}
