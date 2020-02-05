const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } 
  for (let key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2", c: "3" };
const ba = { c: "3", b: "2", a: "1" };
//eqObjects(ab, abc); // => false


console.log(eqObjects(ab, ba)); // => true