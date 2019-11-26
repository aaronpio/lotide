const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`)
    return
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    return
  }
}


const eqArrays = (arr1, arr2) => {

  for (i = 0 ; i < arr1.length ; i++) {
    
    if (arr1[i] !== arr2[i]) {
      return false 
    }
  }
  return true
}


// Testing
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true