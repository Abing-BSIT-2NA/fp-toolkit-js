const toUpper = (str) => str.toUpperCase();
const toLower = (str) => str.toLowerCase();

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const titleCase = (str) =>
  str
    .split(" ")
    .map(capitalize)
    .join(" ");

const camelCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : capitalize(word)
    )
    .join("");

const snakeCase = (str) =>
  str.toLowerCase().split(" ").join("_");

const reverseStr = (str) =>
  str.split("").reverse().join("");

const wordCount = (str) =>
  str.trim().split(/\s+/).length;

const repeat = (n) => (str) =>
  Array.from({ length: n }, () => str).join("");

const truncate = (max) => (str) =>
  str.length > max ? str.slice(0, max - 3) + "..." : str;

module.exports = {
  toUpper,
  toLower,
  capitalize,
  titleCase,
  camelCase,
  snakeCase,
  reverseStr,
  wordCount,
  repeat,
  truncate
};