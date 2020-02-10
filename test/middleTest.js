//const { assertArraysEqual } = require("../assertArraysEqual");
const assert = require("chai").assert;

const { middle } = require("../middle");

//console.log(middle([1, 2, 3, 4, 5, 6]));
//console.log(middle([1, 2, 3, 4, 5]));
//
//console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
//console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

describe("#middle", () => {
  it("returns  3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns  [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns  empty array for empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns  [1] for [1]", () => {
    assert.deepEqual(middle([1]), [1]);
  });
});