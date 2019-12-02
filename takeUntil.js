const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
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

module.exports = takeUntil;
