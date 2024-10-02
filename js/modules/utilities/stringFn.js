const lowerCase = (str) => str.toLowerCase();

const isInclude = (fullText, searchText) => fullText.includes(searchText);

const capitalize = (str) => {
  const arr = str.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
};

export { capitalize, isInclude, lowerCase };
