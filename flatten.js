const assertArraysEqual = (arr1, arr2) => {
  let result;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  if (arr1.length !== arr2.length) {
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

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = arr => {
  let newArr = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      for (let innerEl of el) {
        newArr.push(innerEl);
      }
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};

module.exports = flatten;
