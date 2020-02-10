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
 module.exports = {countOnly}
