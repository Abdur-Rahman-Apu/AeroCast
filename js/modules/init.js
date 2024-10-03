import currentLocationInfo from "./currentLocation/currentLocation.js";
import listeners from "./listeners.js";
import displayCurrentDate from "./UI/Date/displayCurrentDate.js";
import displayCurrentTime from "./UI/Time/displayCurrentTime.js";

export default function init() {
  displayCurrentDate();
  displayCurrentTime();
  currentLocationInfo();
  listeners();
}
