import { toastMessage, toastMessageContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";
import { capitalize } from "../../utilities/stringFn.js";

export default function showToastMessage({ message, type }) {
  let toastMessageStyle = { visibility: "visible", scale: 1, opacity: 1 };

  toastMessageStyle["backgroundColor"] =
    type === "success" ? "#4cd137" : "#eb3b5a";

  toastMessage.innerText = capitalize(message);
  console.log(toastMessageContainer, "toast message container");

  addStyle(toastMessageContainer, toastMessageStyle);

  //   hidden the toast message
  setTimeout(() => {
    addStyle(toastMessageContainer, {
      visibility: "hidden",
      scale: 0,
      opacity: 0,
    });
  }, 2000);
}
