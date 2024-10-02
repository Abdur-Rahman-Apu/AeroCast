import { cityNameInput } from "../../../elements.js";
import { removeAttr, setAttr } from "../../../utilities/domTask.js";

export default function toggleCityName({ isDisabled }) {
  isDisabled
    ? setAttr(cityNameInput, "disabled", true)
    : removeAttr(cityNameInput, "disabled");
}
