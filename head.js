const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion failed:  ${actual}  !== ${expected}`);
  } else {
    console.log(`🍏🍏🍏Assertion passed: ${actual}  == ${expected}`);
  }
};


const head = function(arr) {
  return arr[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([5, "Hello", "Lighthouse", "Labs"]), "5");
assertEqual(head([5, "Hello", "Lighthouse", "Labs"]), 5);