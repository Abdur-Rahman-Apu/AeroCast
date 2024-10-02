import { cityNameOptionsContainer } from "../../elements.js";

export default function displayCityNames(cities) {
  const htmlMarkup = cities
    .map((item) => {
      return `<p data-city=${item}>${item}</p>`;
    })
    .join("");

  cityNameOptionsContainer.innerHTML = htmlMarkup;
}
