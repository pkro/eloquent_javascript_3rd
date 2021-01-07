'use strict';
const { log } = console;

function arrayToList(ar) {
  const node = {
    value: ar[0],
    rest: ar.length == 1 ? null : arrayToList([...ar.slice(1)]),
  };

  return node;
}

function listToArray(list, acc = []) {
  acc.push(list.value);
  if (list.rest == null) {
    return acc;
  }

  return listToArray(list.rest, acc);
}

function prepend(value, list) {
  return {
    value,
    rest: list,
  };
}

function nth(list, idx, runner = 0) {
  if (idx === runner) {
    return list.value;
  }
  return nth(list.rest, idx, runner + 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
