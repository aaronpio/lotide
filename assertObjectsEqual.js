const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);

  if (obj1Keys.length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  let result;

  if (!eqObjects(actual, expected)) {
    result = false;
  }

  if (result === false) {
    console.log(
      `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
    return;
  }
  result = true;
  console.log(
    `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  );
  return;
};

assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 });

module.exports = assertObjectsEqual;
