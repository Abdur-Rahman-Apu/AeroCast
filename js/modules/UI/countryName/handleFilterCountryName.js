import { getCountryInfoIntoArr } from "../../utilities/countryName.js";
import displayCountryNames from "./displayCountryNames.js";

export default function handleFilterCountryName(e) {
  console.log(e.target.value, "value is type name input");
  const countryNames = getCountryInfoIntoArr(e.target.value);
  displayCountryNames(countryNames);
}
