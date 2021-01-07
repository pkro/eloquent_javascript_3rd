'use strict';

const { log } = console;

function old_countBs(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'B') {
      counter++;
    }
  }
  return counter;
}

function countChar(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      counter++;
    }
  }
  return counter;
}

function countBs(str) {
  return countChar(str, 'B');
}
log(countBs('Big BaNG for the buck'));
log(countChar('Big BaNG for the buck', 'h'));
