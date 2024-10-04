import { modalSubmitBtn, submitBtn } from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";
import { removeAttr, setAttr } from "../../../utilities/domTask.js";

export default function toggleSubmitBtn({ targetElm, isDisabled }) {
  let submitBtnElm = isModal(targetElm) ? modalSubmitBtn : submitBtn;

  isDisabled
    ? setAttr(submitBtnElm, "disabled", true)
    : removeAttr(submitBtnElm, "disabled");
}
