const setIntoStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export { getFromStorage, setIntoStorage };
