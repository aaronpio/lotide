const { eqObjects } = require("./index");

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

module.exports = assertObjectsEqual;
