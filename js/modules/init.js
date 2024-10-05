import currentLocationInfo from "./currentLocation/currentLocation.js";
import listeners from "./listeners.js";

export default function init() {
  // get current location weather info
  currentLocationInfo();

  // all listeners written here
  listeners();
}
