const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
    return
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    return
  }
}

const tail = (arr) => {
  return arr.slice(1)
}