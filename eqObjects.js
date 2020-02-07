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

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key of Object.keys(obj1)) {
    console.log(key, typeof obj1[key]);

    if (typeof obj1[key] === "object" && !Array.isArray(obj1[key])) {
      console.log(obj1[key] + " is object");

      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else if (!Array.isArray(obj1[key])) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else if (!eqArrays(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};

const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, abc)); // => false


console.log(eqObjects(ab, ba)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, cd2));
console.log(eqObjects(cd, dc));