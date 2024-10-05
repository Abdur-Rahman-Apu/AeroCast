import { toastMessage, toastMessageContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";
import { capitalize } from "../../utilities/stringFn.js";

export default function showToastMessage({ message, type }) {
  // show the toast message
  let toastMessageStyle = { visibility: "visible", scale: 1, opacity: 1 };

  // set background color
  toastMessageStyle["backgroundColor"] =
    type === "success" ? "#4cd137" : "#eb3b5a";

  // set the text of the toast
  toastMessage.innerText = capitalize(message);

  addStyle(toastMessageContainer, toastMessageStyle);

  //   hidden the toast message after 2 sec
  setTimeout(() => {
    addStyle(toastMessageContainer, {
      visibility: "hidden",
      scale: 0,
      opacity: 0,
    });
  }, 2000);
}
