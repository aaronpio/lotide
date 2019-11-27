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

const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1)

  if (obj1Keys.length !== Object.keys(obj2).length) {
    return false
  }

  for (let key of obj1Keys) {

    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
  }
  return true
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)) // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)) // => false

// const test = { c: "2", a: "1" };
// console.log(eqObjects(ab, test)) // => false

// --------------------------------------------------

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)) // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)) // => false