
const assertArraysEqual = (arr1, arr2) => {
  let result
  for (i = 0 ; i < arr1.length ; i++) {
    if (arr1[i] !== arr2[i]) {
       result = false
    }
  }
  if (arr1.length !== arr2.length) {
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

  for (i = 0 ; i < arr1.length ; i++) {
    
    if (arr1[i] !== arr2[i]) {
      return false 
    }
  }
  return true
}

const middle = (arr) => {
  let midIndex = Math.floor((arr.length - 1) / 2)
  if (arr.length <= 2 && arr.length >= 0) {
    return []
  } else if (arr.length % 2 === 0) {
    return [arr[midIndex], arr[midIndex + 1]]
  } else if (arr.length % 2 !== 0) {
    return [arr[midIndex]]
  }
}
