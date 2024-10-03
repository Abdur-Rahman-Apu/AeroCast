import { todayTime } from "../../elements.js";
import { getCurrentTime } from "../../utilities/getTodayDateTime.js";

export default function displayCurrentTime() {
  setInterval(() => {
    todayTime.innerText = getCurrentTime();
  }, 1000);
}
