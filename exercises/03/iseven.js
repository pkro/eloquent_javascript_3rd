'use strict';

const { log } = console;

function isEven(num) {
  if (num == 1) {
    return false;
  } else if (num == 0) {
    return true;
  } else {
    if (num < 0) {
      return isEven(num + 2);
    } else {
      return isEven(num - 2);
    }
  }
}

log(isEven(50));
log(isEven(75));
log(isEven(-1));
