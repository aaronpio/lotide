const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return true if the arrays are equal", () => {
    const arr = [1, 2, 3, 4];
    assert.deepEqual(tail(arr), [2, 3, 4]);
  });
});
