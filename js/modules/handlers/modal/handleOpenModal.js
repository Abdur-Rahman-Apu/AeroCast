import { modalOverlayContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";

export default function handleOpenModal() {
  addStyle(modalOverlayContainer, { display: "flex" });
}
