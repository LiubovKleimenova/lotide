// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion failed:  ${actual}  !== ${expected}`);
  } else {
    console.log(`🍏🍏🍏Assertion passed: ${actual}  == ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      console.log("more arrays inside");
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true)); 
console.log(assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true)); 
console.log(assertEqual(eqArrays([1, 2], [1, 2, 3]), true)); 