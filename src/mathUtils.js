const add = (a) => (b) => a + b;
const subtract = (a) => (b) => a - b;
const multiply = (a) => (b) => a * b;
const divide = (a) => (b) => a / b;

const clamp = (min, max, value) =>
  Math.min(max, Math.max(min, value));

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 !== 0;

const factorial = (n) =>
  n <= 1 ? 1 : n * factorial(n - 1);

const fibonacci = (n) =>
  n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  clamp,
  isEven,
  isOdd,
  factorial,
  fibonacci,
  range
};