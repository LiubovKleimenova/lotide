const countLetters = function (str) {
  let newStr = str.split(" ").join("");
  console.log(newStr);
  let list = {};
  for (let letter of newStr) {
    if (list[letter]) {
      list[letter]++;
    } else {
      list[letter] = 1;
    }
  }
  return list;
}

console.log(countLetters("abc abc ab ab"));