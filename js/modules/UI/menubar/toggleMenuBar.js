import { menubarContainer, menubarItemsContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";

export default function toggleMenuBar(targetState) {
  // target state: true -> show menu : false -> hide menu
  const hideMenuContainer = { display: "none", animation: "vanish 1s" };
  const showMenuContainer = { display: "block", animation: "showAnimation 1s" };

  addStyle(
    menubarContainer,
    targetState ? showMenuContainer : hideMenuContainer
  );

  // animation for the menu items container
  const hideMenuItemsContainer = {
    animation: "translateGoAnimation 1s",
  };
  const showMenuItemsContainer = {
    animation: "translateCameAnimation 1s",
  };

  addStyle(
    menubarItemsContainer,
    targetState ? showMenuItemsContainer : hideMenuItemsContainer
  );
}
