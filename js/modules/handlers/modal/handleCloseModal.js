import { modalForm, modalOverlayContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";

export default function handleCloseModal() {
  // reset the form
  modalForm.reset();

  // close the modal
  addStyle(modalOverlayContainer, { display: "none", animation: "vanish 1s" });
}
