import { countryNameOptionsContainer, nameInput } from "../../elements.js";

export default function handleClickOnMenubar(e) {
  console.log("ON click menu bar");
  console.log(e.target === nameInput);

  console.log(e.type);
  console.log(e.target);

  if (e.target !== nameInput) {
    console.log("Came here");
    countryNameOptionsContainer.innerHTML = "";
  }
}
