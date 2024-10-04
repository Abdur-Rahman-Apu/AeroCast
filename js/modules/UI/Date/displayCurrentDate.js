import {
  getCurrentTime,
  getTodayDate,
} from "../../utilities/getTodayDateTime.js";

export default function displayCurrentDate() {
  document.querySelector(".day").innerText = getTodayDate();
  setInterval(() => {
    const time = getCurrentTime();
    console.log(time, "time");
    if (time === "12:00 AM") {
      document.querySelector(".date").innerText = getTodayDate();
    }
  }, 60 * 1000);
}
