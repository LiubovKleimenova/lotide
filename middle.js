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

const middle = function (arr) {
  let mid = []
  let midIndex = (arr.length - 1)/2;
  if (midIndex % 1 ===0) {
    console.log(arr[midIndex]);
    mid.push(arr[midIndex]);
  } else {
    mid.push(arr[Math.floor(midIndex)]);
    mid.push(arr[Math.ceil(midIndex)]);
  }

  return mid;
}

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5]));

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));