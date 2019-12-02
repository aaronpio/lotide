const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
};

module.exports = assertEqual;
