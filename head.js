const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
    return
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    return
  }
}

const head = (arr) => {
  return arr[0]
}
