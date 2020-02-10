let findKeyByValue = function(obj, val) {
  let keysArr = Object.keys(obj);
  console.log(keysArr);
  for (let key of keysArr) {
    if (val === obj[key]) {
      return key;
    }
  }
}

module.exports = {findKeyByValue}

//const bestTVShowsByGenre = {
//  sci_fi: "The Expanse",
//  comedy: "Brooklyn Nine-Nine",
//  drama: "The Wire",
//  onemoregenre: "The Wire"
//};
//
//console.log(findKeyByValue(bestTVShowsByGenre, "The "));
////assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);