'use strict';
const { log } = console;

let arrays = [[1, 2, 3], [4, 5], [6]];
const res = arrays.reduce((acc, val) => acc.concat(val), []);
log(res);
// → [1, 2, 3, 4, 5, 6]
