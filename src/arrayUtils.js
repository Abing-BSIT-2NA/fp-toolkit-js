// Basic array operations

const head = (arr) => arr[0];

const tail = (arr) => arr.slice(1);

const last = (arr) => arr[arr.length - 1];

const init = (arr) => arr.slice(0, -1);

// Higher order functions

const map = (fn, arr) => arr.map(fn);

const filter = (predicate, arr) => arr.filter(predicate);

const reduce = (fn, initial, arr) => arr.reduce(fn, initial);

// Functional utilities

const unique = (arr) => [...new Set(arr)];

const flatten = (arr) =>
  arr.reduce((acc, item) =>
    acc.concat(Array.isArray(item) ? item : [item]), []);

const groupBy = (fn, arr) =>
  arr.reduce((groups, item) => {
    const key = fn(item);
    return {
      ...groups,
      [key]: [...(groups[key] || []), item]
    };
  }, {});

const partition = (predicate, arr) =>
  arr.reduce(
    ([pass, fail], item) =>
      predicate(item)
        ? [[...pass, item], fail]
        : [pass, [...fail, item]],
    [[], []]
  );

const zip = (arr1, arr2) =>
  arr1.map((item, index) => [item, arr2[index]]);

const take = (n, arr) => arr.slice(0, n);

const sum = (arr) => arr.reduce((acc, n) => acc + n, 0);

module.exports = {
  head,
  tail,
  last,
  init,
  map,
  filter,
  reduce,
  unique,
  flatten,
  groupBy,
  partition,
  zip,
  take,
  sum
};