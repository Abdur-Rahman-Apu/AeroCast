import { addStyle } from "../../../utilities/domTask.js";

export default function showHideSubmitBtn({ submitBtn, state }) {
  const style = state ? { display: "block" } : { display: "none" };

  addStyle(submitBtn, style);
}
