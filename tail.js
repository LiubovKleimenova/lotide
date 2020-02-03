const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion failed:  ${actual}  !== ${expected}`);
  } else {
    console.log(`🍏🍏🍏Assertion passed: ${actual}  == ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
  console.log(arr);
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!