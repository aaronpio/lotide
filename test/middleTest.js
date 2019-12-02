const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should equal true", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should equal true", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should equal true", () => {
    assert.deepEqual(middle([1]), []);
  });
});
