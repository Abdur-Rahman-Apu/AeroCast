import currentLocationInfo from "./currentLocation/currentLocation.js";
import listeners from "./listeners.js";

export default function init() {
  currentLocationInfo();

  listeners();
}
