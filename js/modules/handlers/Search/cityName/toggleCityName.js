import { cityNameInput, modalCityNameInput } from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";
import { removeAttr, setAttr } from "../../../utilities/domTask.js";

export default function toggleCityName({ targetElm, isDisabled }) {
  // decide city element based on the target element
  let cityInputElm = isModal(targetElm) ? modalCityNameInput : cityNameInput;

  isDisabled
    ? setAttr(cityInputElm, "disabled", true)
    : removeAttr(cityInputElm, "disabled");
}
