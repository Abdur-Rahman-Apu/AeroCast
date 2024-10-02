import { countryNameOptionsContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";

export default function displayCountryNames(countryNames) {
  const countryNameInfoHtml = countryNames
    .map((item) => {
      console.log(item, "item");
      return `
        <div>
            <img src="${item.flag}" alt="This is indicating the ${item.name} flag image">
            <p>${item.name}</p>
        </div>
    `;
    })
    .join("");
  console.log(countryNameInfoHtml);
  countryNameOptionsContainer.innerHTML = countryNameInfoHtml;

  addStyle(countryNameOptionsContainer, { height: "auto" });
}
