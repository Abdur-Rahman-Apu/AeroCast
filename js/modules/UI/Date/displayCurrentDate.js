import { todayDate } from "../../elements.js";
import { getTodayDate } from "../../utilities/getTodayDateTime.js";

export default function displayCurrentDate() {
  todayDate.innerText = getTodayDate();
}
