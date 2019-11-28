
const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

console.log(map(words, e => e[0]))

const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false
  }

  for (i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

const assertArraysEqual = (arr1, arr2) => {
  let result

  if (!eqArrays(arr1, arr2)) {
    result = false
  }

  if (result === false) {
    console.log(`🛑 Assertion Failed: ${result}`)
    return
  }
  result = true
  console.log(`✅ Assertion Passed: ${result}`)
  return
}

const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false
  }

  for (i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}