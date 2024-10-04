import { getCurrentTime } from "../../utilities/getTodayDateTime.js";

export default function displayCurrentTime() {
  setInterval(() => {
    document.querySelector(".time") &&
      (document.querySelector(".time").innerText = getCurrentTime());
  }, 1000);
}
