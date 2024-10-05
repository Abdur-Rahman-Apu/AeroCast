import { menubarContainer, menubarItemsContainer } from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";

export default function toggleMenuBar(targetState) {
  console.log(targetState);
  const hideMenuContainer = { display: "none", animation: "vanish 1s" };
  const showMenuContainer = { display: "block", animation: "showAnimation 1s" };

  addStyle(
    menubarContainer,
    targetState ? showMenuContainer : hideMenuContainer
  );

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
