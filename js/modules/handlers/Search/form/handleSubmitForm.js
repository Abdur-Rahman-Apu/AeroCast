import {
  cityNameInput,
  modalCityNameInput,
  modalNameInput,
  nameInput,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";
import sendApiRequest from "../../../utilities/sendApiRequest.js";

export default async function handleSubmitForm(e) {
  e.preventDefault();

  const countryName = isModal(e) ? modalNameInput.value : nameInput.value;
  const cityName = isModal(e) ? modalCityNameInput.value : cityNameInput.value;
  console.log("Form submit");

  await sendApiRequest({ countryName, cityName });
}
