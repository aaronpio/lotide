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
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  result = true;
  console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  return;
};

module.exports = assertArraysEqual;
