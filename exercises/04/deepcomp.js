'use strict';
const { log } = console;

function deepEqual(a, b, keys = null) {
  if (typeof a !== 'object' || a === null) {
    return a === b;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    if (!keys) keys = Object.keys(a);
    return deepEqual(a[keys[0]], b[keys[0]], [...keys.slice(1)]);
  }
  return false;
}

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
