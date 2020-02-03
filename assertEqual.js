// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion failed:  ${actual}  !== ${expected}`);
  } else {
    console.log(`🍏🍏🍏Assertion passed: ${actual}  == ${expected}`);
  }
};
//  TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual("1", 1);
