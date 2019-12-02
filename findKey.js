const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;
