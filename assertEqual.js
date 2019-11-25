const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
    return
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
    return
  }
}

// TEST CODE
assertEqual("yo", "yo");
assertEqual(1, 1);