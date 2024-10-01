const selectElm = (elm) => document.querySelector(elm);

const listenEvent = (elm, eventName, handler) =>
  elm.addEventListener(eventName, handler);

const addStyle = (elm, style) => Object.assign(elm.style, style);

export { addStyle, listenEvent, selectElm };
