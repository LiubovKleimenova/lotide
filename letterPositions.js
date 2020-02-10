const letterPositions = function(str) {
  let newObj = {};
  newStr = str.split("");
  

  for (let [index, letter] of newStr.entries()) {
    if (letter !== " ") {
      if (!newObj[letter]) {
        newObj[letter] = [];
      }
      newObj[letter].push(index);
    }
  }

  return newObj;
}

module.exports = {letterPositions}
//console.log(letterPositions("lighthouse in the house"));