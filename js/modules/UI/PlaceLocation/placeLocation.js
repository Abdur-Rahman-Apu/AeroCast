import countryInfo from "../../../../assets/data/countryData.js";
import { weather } from "../../../config.js";
import { header, sidebarUpperTopContainer } from "../../elements.js";
import { insertAdjacentHtml } from "../../utilities/domTask.js";
import {
  getCurrentTime,
  getTodayDate,
} from "../../utilities/getTodayDateTime.js";
import displayCurrentDate from "../date/displayCurrentDate.js";
import displayCurrentTime from "../time/displayCurrentTime.js";

export default function placeLocation() {
  // if old location is exist then remove the element
  if (document.querySelector(".location-date")) {
    document.querySelector(".location-date").remove();
  }

  // format the location name
  // if city exist : Dhaka, BD
  // if city is absent: Bangladesh
  const { countryName, cityName, countryCode } = weather;

  let locationName = "";

  if (cityName) {
    locationName = `${cityName}, ${countryCode}`;
  } else {
    locationName = `${countryName}`;
  }

  // get the country flag
  const flgUrl = countryInfo[countryName]?.flag ?? "./assets/images/flag.png";

  // location related html markup
  const locationInfoHtml = `
        <div class="location-date">
            <p class="location">
                <i class="fa-solid fa-earth-americas location-icon"></i>
                <span class="location-name">${locationName}</span>
                    <img src="${flgUrl}" class="location-flag"
                            alt="This image is indicating the location flag">
            </p>
            <p class="date">
                Today, <span class="day">${getTodayDate()}</span>, <span class="time">${getCurrentTime()}</span>
            </p>
        </div>
    `;

  // for large device: locaton will be placed in the header end side
  if (screen.width >= 1024) {
    insertAdjacentHtml(header, locationInfoHtml, "beforeend");
  }

  // for small and table device: location will be placed in the top of the sidebar
  if (screen.width < 1024) {
    insertAdjacentHtml(
      sidebarUpperTopContainer,
      locationInfoHtml,
      "afterbegin"
    );
  }

  // update the current time and date after couple of seconds
  displayCurrentTime();

  displayCurrentDate();
}
