import { weather } from "../../../config.js";
import {
  transformUnitCelcius,
  transformUnitFarenhite,
} from "../../elements.js";
import { addStyle } from "../../utilities/domTask.js";
import sendApiRequest from "../../utilities/sendApiRequest.js";

async function sendRequest() {
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
  // get the selected unit name
  const unit = e.target.dataset.unit;

  if (unit === "c" && weather.unit !== "metric") {
    // selected celcius and current unit is not metric
    activeStyle(transformUnitCelcius);
    deActiveStyle(transformUnitFarenhite);

    // update the unit
    weather.unit = "metric";

    // send api request
    await sendRequest();
  }
  if (unit === "f" && weather.unit !== "imperial") {
    // selected farenheit and current unit is not imperial
    activeStyle(transformUnitFarenhite);
    deActiveStyle(transformUnitCelcius);

    // update the unit
    weather.unit = "imperial";

    // send api request
    await sendRequest();
  }
}
