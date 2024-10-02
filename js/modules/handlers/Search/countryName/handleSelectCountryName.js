import {
  countryFlag,
  countryNameOptionsContainer,
  nameInput,
} from "../../../elements.js";

export default function handleSelectCountryName(e) {
  console.log("select country name");
  console.log(e.target);
  console.log(e.target.innerText);

  const countryName = e.target.dataset.country;

  console.log(countryName, "country name");
  console.log(e.target.tagName, "type");

  if (countryName) {
    nameInput.value = countryName;

    let flagUrl = "";
    if (e.target.tagName === "P") {
      console.log(e.target.previousElementSibling, "pres");
      flagUrl = e.target.previousElementSibling.getAttribute("src");
    } else if (e.target.tagName === "DIV") {
      console.log(e.target.children[0], "child");
      flagUrl = e.target.children[0].src;
    } else {
      console.log(e.target.src, "img");
      flagUrl = e.target.getAttribute("src");
    }
    // countryFlag.setAttribute("src", flagUrl);
    countryFlag.src = flagUrl;
  }

  countryNameOptionsContainer.innerHTML = "";
}
