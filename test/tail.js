const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");

let arr = [1, 2, 3, 4];
assertArraysEqual(tail(arr), [2, 3, 4]);
