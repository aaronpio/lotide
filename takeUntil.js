const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  let result;

  if (!eqArrays(arr1, arr2)) {
    result = false;
  }

  if (result === false) {
    console.log(`🛑 Assertion Failed: ${result}`);
    return;
  }
  result = true;
  console.log(`✅ Assertion Passed: ${result}`);
  return;
};

const takeUntil = (array, callback) => {
  let result = [];
  for (let el of array) {
    if (!callback(el)) {
      result.push(el);
    } else {
      return result;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);

assertArraysEqual([1, 2, 5, 7, 2], results1);
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);

module.exports = takeUntil;
