'use strict';
const { log } = console;

function range(start, end, step = 1) {
  const out = [];
  const cmp = start > end ? (a, b) => a >= b : (a, b) => a <= b;
  for (let i = start; cmp(i, end); i += step) {
    out.push(i);
  }
  return out;
}

function sum(ar) {
  let sum = 0;
  for (let n of ar) {
    sum += n;
  }
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
