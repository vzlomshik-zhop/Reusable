'use strict';

const range = (b, e) => {let a = []; for(let i = b; i <= e - 2; i += 2) {a.push(i + 1);} return a;};

const a = range(0, 100);
console.log(a);

module.exports = { rangeOdd };
