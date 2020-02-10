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

module.exports = {middle}