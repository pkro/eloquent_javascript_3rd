'use strict';
const { log } = console;

function everyLoop(ar, predicate) {
  for (let e of ar) {
    if (!predicate(e)) {
      return false;
    }
  }
  return true;
}

function everySome(ar, predicate) {
  return !ar.some((e) => !predicate(e));
}

let every = everyLoop;
console.log(every.name);
console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

every = everySome;

console.log(every.name);
console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
