'use strict';
const { log } = console;

class Group {
  constructor() {
    this.group = [];
  }

  static from(iterable) {
    const grp = new Group();
    for (let e of iterable) {
      if (!grp.has(e)) {
        grp.add(e);
      }
    }
    return grp;
  }

  has(e) {
    return this.group.indexOf(e) !== -1;
  }

  add(e) {
    if (!this.has(e)) {
      this.group.push(e);
    }
  }

  delete(e) {
    this.group = this.group.filter((el) => el != e);
  }

  [Symbol.iterator]() {
    let current = -1;
    return {
      // either use arrow function to keep the current this, otherwise use bind(this) on the returned function
      next: function () {
        current++;
        return {
          value: this.group[current],
          done: current === this.group.length,
        };
      }.bind(this),
    };
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
