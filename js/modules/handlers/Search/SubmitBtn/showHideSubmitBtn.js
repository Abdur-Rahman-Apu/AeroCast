import { addStyle } from "../../../utilities/domTask.js";

export default function showHideSubmitBtn({ submitBtn, state }) {
  // state: true -> show , false -> hide
  const style = state ? { display: "block" } : { display: "none" };

  addStyle(submitBtn, style);
}
