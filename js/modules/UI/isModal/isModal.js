export default function isModal(e) {
  console.log(e.target);

  return e.target.closest("#modal-form") ? true : false;
}
