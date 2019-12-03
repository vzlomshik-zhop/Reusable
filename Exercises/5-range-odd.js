'use strict';

const range = (b, e) => {let a = []; for (let i = b; i <= e; i++) {if (i % 2 != 0) {a.push(i)}} return a;};

const a = range(0, 100);
console.log(a);

module.exports = { rangeOdd };
