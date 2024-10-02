import { cityNameInput, cityNameOptionsContainer } from "../../../elements.js";

export default function handleSelectCityName(e) {
  console.log(e.target);
  console.log(e.target.innerText);

  const cityName = e.target.innerText;

  if (cityName) {
    cityNameInput.value = cityName;
    cityNameOptionsContainer.innerHTML = "";
  }
}
