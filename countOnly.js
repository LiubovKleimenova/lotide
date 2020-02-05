const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔥🔥🔥Assertion failed:  ${actual}  !== ${expected}`);
  } else {
    console.log(`🍏🍏🍏Assertion passed: ${actual}  == ${expected}`);
  }
};

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const countOnly = function(allNames, itemsToCount) {
  
  let finalObj = {}
  let namesToCheck = Object.keys(itemsToCount);
  console.log(namesToCheck);
  for (let name of allNames) {
    console.log(`checking ${name}`);
    if (namesToCheck.includes(name) && itemsToCount[name]) {
      if (Object.keys(finalObj).includes(name)) {
        finalObj[name]++;
      } else {
        finalObj[name] = 1;
      }
    }
  }
  return finalObj;
};

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Salima: false
});

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Salima"], undefined));

