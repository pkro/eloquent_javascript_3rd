const SCRIPTS = require('./scripts');
('use strict');

const { log } = console;

function between(code, [start, end]) {
  return code >= start && code <= end;
}

function partOf(code, scriptObj) {
  for (codeRange of scriptObj.ranges) {
    if (between(code, codeRange)) {
      return true;
    }
  }
  return false;
}

function getScript(code, scripts) {
  for (script of scripts) {
    if (partOf(code, script)) {
      return script;
    }
  }
  return 'not found';
}

function getDirection(code, scripts) {
  return getScript(code, scripts).direction;
}

function countDirections(acc, letter, scripts) {
  let direction = getDirection(letter.codePointAt(0), scripts);
  let amount = acc[direction] ? acc[direction] + 1 : 1;
  return {
    ...acc,
    [direction]: amount,
  };
}

function dominantDirection(text) {
  // create object without own properties as a Map for direction: amount
  const m = text
    .split('')
    .reduce(
      (acc, letter) => countDirections(acc, letter, SCRIPTS),
      Object.create(null)
    );
  return Object.entries(m).reduce(
    (acc, [direction, amount]) =>
      amount > acc.amount ? { ...acc, direction, amount } : { ...acc },
    { direction: '', amount: -Infinity }
  ).direction;
}

log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
