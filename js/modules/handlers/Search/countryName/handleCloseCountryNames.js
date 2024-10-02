import { countryNameOptionsContainer } from "../../../elements.js";

export default function handleCloseCountryNames() {
  console.log("close country names");
  setTimeout(() => {
    countryNameOptionsContainer.innerHTML = "";
  }, 500);
}
