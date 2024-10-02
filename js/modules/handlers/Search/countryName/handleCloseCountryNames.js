import { countryNameOptionsContainer } from "../../../elements.js";

export default function handleCloseCountryNames(e) {
  console.log("close country names");
  countryNameOptionsContainer.innerHTML = "";
}
