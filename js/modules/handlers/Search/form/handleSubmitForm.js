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
import showHideSubmitBtn from "../SubmitBtn/showHideSubmitBtn.js";

export default async function handleSubmitForm(e) {
  e.preventDefault();
  const form = isModal(e) ? modalForm : menuForm;
  const submitBtn = isModal(e) ? modalSubmitBtn : submitBtn;

  showHideSubmitBtn({ submitBtn, state: false });
  toggleLoader({ state: true, parent: form, pos: "beforeend" });

  const countryName = isModal(e) ? modalNameInput.value : nameInput.value;
  const cityName = isModal(e) ? modalCityNameInput.value : cityNameInput.value;
  console.log("Form submit");

  await sendApiRequest({ countryName, cityName });

  toggleLoader({ state: false });
  showHideSubmitBtn({ submitBtn, state: true });

  // reset the form
  form.reset();
}
