import { menubarContainer, menubarItemsContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";

export default function toggleMenuBar(targetState) {
  console.log(targetState);
  const hideMenuContainer = { display: "none" };
  const showMenuContainer = { display: "block" };

  addStyle(
    menubarContainer,
    targetState ? showMenuContainer : hideMenuContainer
  );

  const hideMenuItemsContainer = {
    transform: "translateX(100%)",
  };
  const showMenuItemsContainer = {
    transform: "translateX(0)",
  };

  addStyle(
    menubarItemsContainer,
    targetState ? showMenuItemsContainer : hideMenuItemsContainer
  );
}
