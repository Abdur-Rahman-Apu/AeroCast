const selectElm = (elm) => document.querySelector(elm);

const listenEvent = (elm, eventName, handler) =>
  elm.addEventListener(eventName, handler);

const addStyle = (elm, style) => Object.assign(elm.style, style);

const insertAdjacentHtml = (parent, html, pos) =>
  parent.insertAdjacentHtml(pos, html);

const getAttr = (elm, name) => elm.getAttribute(name);
const setAttr = (elm, name, value) => elm.setAttribute(name, value);
const removeAttr = (elm, name) => elm.removeAttribute(name);
export {
  addStyle,
  getAttr,
  insertAdjacentHtml,
  listenEvent,
  removeAttr,
  selectElm,
  setAttr,
};
