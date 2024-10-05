export default function isModal(e) {
  // checking the target elements parent is either modal form or not
  return e.target.closest("#modal-form") ? true : false;
}
