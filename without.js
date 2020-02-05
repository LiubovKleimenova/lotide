const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🍏🍏🍏Assertion passed:  ${arr1} == ${arr2}`);
  } else {
    console.log(`🔥🔥🔥Assertion failed:  ${arr1} !== ${arr2}`);
  }
};

let without = function (array, unwanted) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (!unwanted.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

//console.log(without(["hello", "world", "lighthouse"], ["world", "hello", 2]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);