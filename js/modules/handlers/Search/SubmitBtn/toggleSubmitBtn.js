import { submitBtn } from "../../../elements.js";
import { removeAttr, setAttr } from "../../../utilities/domTask.js";

export default function toggleSubmitBtn({ isDisabled }) {
  isDisabled
    ? setAttr(submitBtn, "disabled", true)
    : removeAttr(submitBtn, "disabled");
}
