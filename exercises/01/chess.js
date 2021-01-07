'use strict';

const size = 10;
for (let i = 1; i <= size; i++) {
  console.log((i % 2 == 0 ? '# ' : ' #').repeat(Math.round(size / 2)));
}
