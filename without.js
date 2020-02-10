
let without = function (array, unwanted) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (!unwanted.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

module.exports = {without}
