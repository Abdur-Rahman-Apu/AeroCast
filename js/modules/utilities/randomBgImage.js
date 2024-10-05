import { sidebarUpperContainer } from "../elements.js";
import { addStyle } from "./domTask.js";
import { getCurrentTime } from "./getTodayDateTime.js";
import { lowerCase } from "./stringFn.js";

function getRandomValue(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// to get the image path
const getImagePath = (property, folderName) => {
  // image available in the asset folder
  const weatherTypeImgCount = {
    "dust+sand": 10,
    clouds: 7,
    "haze+fog+mist": 13,
    snow: 8,
    squall: 6,
    tornado: 6,
    thunderstorm: 8,
    "rain+drizzle": {
      day: 7,
      night: 5,
    },
    "clear+ash": {
      day: 29,
      night: 21,
    },
  };

  // common image path
  const commonPath = "./assets/images/weather";

  let url = `${commonPath}/clouds/2.jpg`;

  // get random image no
  let totalImage = weatherTypeImgCount[property];

  let imageNo = getRandomValue(1, totalImage);

  url = `${commonPath}/${folderName}`;

  // day and night folder for only clear and rain weather
  if (property === "clear+ash" || property === "rain+drizzle") {
    // timeIndicator: am or pm
    const timeIndicator = getCurrentTime().split(" ")[1];

    if (lowerCase(timeIndicator) === "am") {
      imageNo = getRandomValue(1, totalImage.night);
      url = `${url}/night`;
    } else {
      imageNo = getRandomValue(1, totalImage.day);
      url = `${url}/day`;
    }
  }

  url = `${url}/${imageNo}.jpg`;

  return url;
};

// weather type condition is handled here
const chooseImgRandomly = (weatherType) => {
  switch (weatherType) {
    case "dust":
    case "sand":
      return getImagePath("dust+sand", "dust-sand");

    case "clouds":
      return getImagePath("clouds", "clouds");

    case "squall":
      return getImagePath("squall", "squall");

    case "tornado":
      return getImagePath("tornado", "tornado");

    case "snow":
      return getImagePath("snow", "snow");

    case "thunderstorm":
      return getImagePath("thunderstorm", "thunderstorm");

    case "haze":
    case "fog":
    case "mist":
    case "smoke":
      return getImagePath("haze+fog+mist", "haze-fog-mist");

    case "rain":
    case "drizzle":
      return getImagePath("rain+drizzle", "rain-drizzle");

    case "clear":
    case "ash":
      return getImagePath("clear+ash", "clear-ash");
  }
};

// main function of changing the sidebar background image
const changeBgImage = (weatherType) => {
  // weatherType:dist,rain,haze,clear etc

  // get the image path
  const url = chooseImgRandomly(lowerCase(weatherType));

  // replace with the new image path
  addStyle(sidebarUpperContainer, { backgroundImage: `url(${url})` });

  // update the background image after 10 seconds
  setInterval(() => {
    const url = chooseImgRandomly(lowerCase(weatherType));
    addStyle(sidebarUpperContainer, { backgroundImage: `url(${url})` });
  }, 10 * 1000);
};

export { changeBgImage };
