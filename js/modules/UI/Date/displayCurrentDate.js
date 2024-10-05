import {
  getCurrentTime,
  getTodayDate,
} from "../../utilities/getTodayDateTime.js";

export default function displayCurrentDate() {
  document.querySelector(".day").innerText = getTodayDate();
  setInterval(() => {
    const time = getCurrentTime();

    // update the date only when time 12 AM
    if (time === "12:00 AM") {
      document.querySelector(".date").innerText = getTodayDate();
    }
  }, 60 * 1000);
}
