'use strict';
const { log } = console;

function reverseArray(ar) {
  const out = [];
  for (let e of ar) {
    out.unshift(e);
  }
  return out;
}

function reverseArrayInPlace(ar) {
  // Math.floor not necessary
  for (let i = 0; i < ar.length / 2; i++) {
    [ar[i], ar[ar.length - 1 - i]] = [ar[ar.length - 1 - i], ar[i]];
  }
}

console.log(reverseArray(['A', 'B', 'C']));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
