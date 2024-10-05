import { modalSubmitBtn, submitBtn } from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";
import { removeAttr, setAttr } from "../../../utilities/domTask.js";

export default function toggleSubmitBtn({ targetElm, isDisabled }) {
  // decide the submit btn, for modal and menu
  let submitBtnElm = isModal(targetElm) ? modalSubmitBtn : submitBtn;

  // disable and enable the submit btn
  isDisabled
    ? setAttr(submitBtnElm, "disabled", true)
    : removeAttr(submitBtnElm, "disabled");
}
