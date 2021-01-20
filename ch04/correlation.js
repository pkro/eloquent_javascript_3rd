'use strict';

const { log } = console;

/* let journal = [
  {
    events: ['work', 'touched tree', 'pizza', 'running', 'television'],
    squirrel: false,
  },
  {
    events: [
      'work',
      'ice cream',
      'cauliflower',
      'lasagna',
      'touched tree',
      'brushed teeth',
    ],
    squirrel: false,
  },
  {
    events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
    squirrel: true,
  },
  
]; */

let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

function addRandomEntries(events, num, eventsMin, eventsMax) {
  for (let i = 0; i < num; i++) {}
}

function getRandomEvents(events, eventsMin, eventsMax) {}

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// for (let i = 0; i < 10; i++) {
//   log(randBetween(12, 16));
// }

module.exports = { randBetween };
