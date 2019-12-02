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

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    x => x.stars === 2
  ),
  "noma"
); // => "noma"

module.exports = findKey;
