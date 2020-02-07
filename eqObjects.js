const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      console.log("more arrays inside");
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
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


const cd = { c: "1", d: ["2", 3], a: { a: 2 }, e: 2, f: [[1, 1], [2, 2]]};
const dc = {
  d: ["2", 3],
  c: "1",
  a: { a: 2 },
  e: 2,
  f: [
    [1, 1],
    [2, 2]
  ]
};
console.log(eqObjects(cd, dc));//console.log(eqObjects(cd, dc));
