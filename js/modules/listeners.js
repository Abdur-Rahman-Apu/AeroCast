import { closeMenuBarContainer, humburgerContainer } from "./elements.js";
import handleCloseMenubar from "./handlers/Menubar/handleCloseMenubar.js";
import handleOpenMenubar from "./handlers/Menubar/handleOpenMenubar.js";
import { listenEvent } from "./utilities/domTask.js";

export default function listeners() {
  listenEvent(humburgerContainer, "click", handleOpenMenubar);
  listenEvent(closeMenuBarContainer, "click", handleCloseMenubar);
}
