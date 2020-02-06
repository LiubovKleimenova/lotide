const findKey = function (obj, cb) {
  let flag = true;
  for (let elem of Object.keys(obj)) {
    if (cb((obj[elem]))) {
      return elem;
    }
  }
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)) // => "noma"