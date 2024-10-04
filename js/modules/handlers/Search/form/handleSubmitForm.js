import { cityNameInput, nameInput } from "../../../elements.js";
import sendApiRequest from "../../../utilities/sendApiRequest.js";

export default async function handleSubmitForm(e) {
  e.preventDefault();

  const countryName = nameInput.value;
  const cityName = cityNameInput.value;
  console.log("Form submit");

  await sendApiRequest({ countryName, cityName });
}
