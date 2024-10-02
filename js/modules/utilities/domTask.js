const selectElm = (elm) => document.querySelector(elm);

const listenEvent = (elm, eventName, handler) =>
  elm.addEventListener(eventName, handler);

const addStyle = (elm, style) => Object.assign(elm.style, style);

const insertAdjacentHtml = (parent, html, pos) =>
  parent.insertAdjacentHtml("afterbegin", html);

export { addStyle, insertAdjacentHtml, listenEvent, selectElm };
