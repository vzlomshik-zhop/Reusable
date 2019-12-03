'use strict';

const square = (x) => (x ** 2);

const cube = (x) => (x ** 3);

const average = (a, b) => ((a + b) / 2.0);

const calculate = () => {let a = []; for (let i = 0; i <= 9; i++) {a.push(average(square(i), cube(i)))} return a;};

const a = calculate();
console.log(a);

module.exports = { square, cube, average, calculate };
