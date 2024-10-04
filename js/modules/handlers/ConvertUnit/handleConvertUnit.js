import { weather } from "../../../config.js";
import {
  transformUnitCelcius,
  transformUnitFarenhite,
} from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";
import sendApiRequest from "../../utilities/sendApiRequest.js";

async function sendRequest() {
  console.log("send request");
  await sendApiRequest({
    countryName: weather.countryName,
    cityName: weather.cityName,
  });
}

const activeStyle = (elm) => {
  const style = {
    backgroundColor: "#000",
    color: "#fff",
  };

  addStyle(elm, style);
};

const deActiveStyle = (elm) => {
  const style = {
    backgroundColor: "#fff",
    color: "#000",
  };

  addStyle(elm, style);
};

export default async function handleConvertUnit(e) {
  console.log("click");
  console.log(e.target);
  const unit = e.target.dataset.unit;

  console.log(unit, weather.unit);

  if (unit === "c" && weather.unit !== "metric") {
    activeStyle(transformUnitCelcius);
    deActiveStyle(transformUnitFarenhite);
    console.log("came c");
    weather.unit = "metric";
    await sendRequest();
  }
  if (unit === "f" && weather.unit !== "imperial") {
    activeStyle(transformUnitFarenhite);
    deActiveStyle(transformUnitCelcius);
    console.log("came f");
    weather.unit = "imperial";
    await sendRequest();
  }
}
