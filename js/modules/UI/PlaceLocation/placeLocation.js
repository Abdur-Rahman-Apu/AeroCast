import countryInfo from "../../../../assets/data/countryData.js";
import { weather } from "../../../config.js";
import { header, sidebarUpperTopContainer } from "../../elements.js";
import { insertAdjacentHtml } from "../../utilities/domTask.js";
import {
  getCurrentTime,
  getTodayDate,
} from "../../utilities/getTodayDateTime.js";
import displayCurrentDate from "../Date/displayCurrentDate.js";
import displayCurrentTime from "../Time/displayCurrentTime.js";

export default function placeLocation() {
  if (document.querySelector(".location-date")) return;

  const { countryName, cityName, countryCode } = weather;

  console.log(countryName, cityName, countryCode);
  let locationName = "";

  if (cityName) {
    locationName = `${cityName}, ${countryCode}`;
  } else {
    locationName = `${countryName}`;
  }

  const flgUrl = countryInfo[countryName]?.flag ?? "./assets/images/flag.png";

  const locationInfoHtml = `
        <div class="location-date">
            <p class="location">
                <i class="fas fa-map-marker-alt location-icon"></i>
                <span class="location-name">${locationName}</span>
                    <img src="${flgUrl}" class="location-flag"
                            alt="This image is indicating the location flag">
            </p>
            <p class="date">
                Today, <span class="day">${getTodayDate()}</span>, <span class="time">${getCurrentTime()}</span>
            </p>
        </div>
    `;
  if (screen.width >= 1024) {
    insertAdjacentHtml(header, locationInfoHtml, "beforeend");
  } else {
    insertAdjacentHtml(
      sidebarUpperTopContainer,
      locationInfoHtml,
      "afterbegin"
    );
  }

  displayCurrentTime();

  displayCurrentDate();
}
