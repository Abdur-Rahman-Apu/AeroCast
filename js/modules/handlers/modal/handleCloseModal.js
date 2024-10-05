import { modalForm, modalOverlayContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";

export default function handleCloseModal() {
  modalForm.reset();
  addStyle(modalOverlayContainer, { display: "none", animation: "vanish 1s" });
}
