//const { assertArraysEqual } = require("../assertArraysEqual");
const { tail } = require("../tail");
const assert = require("chai").assert;
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(words)); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it('returns  ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });

  it('returns  empty array for ["abc"]', () => {
    assert.deepEqual(tail(["abc"]), []);
  });

  it('returns  empty array for empty array', () => {
    assert.deepEqual(tail([]), []);
  });
}); 