import { cityNameOptionsContainer } from "../../../elements.js";

export default function handleCloseCityNames() {
  console.log("close country names");
  setTimeout(() => {
    cityNameOptionsContainer.innerHTML = "";
  }, 500);
}
