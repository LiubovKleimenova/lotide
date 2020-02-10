const map = function (arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
}

module.exports = {map}

//const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word.toUpperCase());
//console.log(results1);