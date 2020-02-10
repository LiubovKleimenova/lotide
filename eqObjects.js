const eqArrays = require("./eqArrays");

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

module.exports = { eqObjects };

