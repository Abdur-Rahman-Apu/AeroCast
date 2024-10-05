const lowerCase = (str) => str.toLowerCase();

const isInclude = (fullText, searchText) => fullText.includes(searchText);

const capitalize = (str) => {
  if (str) {
    const arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  }
  return str;
};

export { capitalize, isInclude, lowerCase };
