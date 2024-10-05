import {
  cityNameInput,
  menuForm,
  modalCityNameInput,
  modalForm,
  modalNameInput,
  modalSubmitBtn,
  nameInput,
} from "../../../elements.js";
import isModal from "../../../UI/isModal/isModal.js";
import toggleLoader from "../../../UI/loader/toggleLoader.js";
import sendApiRequest from "../../../utilities/sendApiRequest.js";
import showHideSubmitBtn from "../submitBtn/showHideSubmitBtn.js";

export default async function handleSubmitForm(e) {
  e.preventDefault();

  // hide the submit button
  showHideSubmitBtn({ submitBtn, state: false });

  // show the loader
  toggleLoader({ state: true, parent: form, pos: "beforeend" });

  // decide the elements for the modal and menu based on the target element
  const form = isModal(e) ? modalForm : menuForm;
  const submitBtn = isModal(e) ? modalSubmitBtn : submitBtn;
  const countryName = isModal(e) ? modalNameInput.value : nameInput.value;
  const cityName = isModal(e) ? modalCityNameInput.value : cityNameInput.value;

  // send api request by using country and city name
  await sendApiRequest({ countryName, cityName });

  // hide the loader and show the submit button
  toggleLoader({ state: false });
  showHideSubmitBtn({ submitBtn, state: true });

  // reset the form
  form.reset();
}
