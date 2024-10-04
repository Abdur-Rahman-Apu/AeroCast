import { sidebarUpperContainer } from "../elements.js";
import { addStyle } from "./domTask.js";
import { getCurrentTime } from "./getTodayDateTime.js";
import { lowerCase } from "./stringFn.js";

function getRandomValue(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

const getImagePath = (property, folderName) => {
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
  const commonPath = "./assets/images/weather";

  let url = `${commonPath}/clouds/2.jpg`;

  let totalImage = weatherTypeImgCount[property];
  console.log(totalImage, "totalImage");
  let imageNo = getRandomValue(1, totalImage);
  console.log(imageNo, "imageNo");
  url = `${commonPath}/${folderName}`;

  if (property === "clear+ash" || property === "rain+drizzle") {
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

const changeBgImage = (weatherType) => {
  const url = chooseImgRandomly(lowerCase(weatherType));
  console.log(url);
  addStyle(sidebarUpperContainer, { backgroundImage: `url(${url})` });

  setInterval(() => {
    const url = chooseImgRandomly(lowerCase(weatherType));
    addStyle(sidebarUpperContainer, { backgroundImage: `url(${url})` });
  }, 6000);
};

export { changeBgImage };
