let flatten = function(arr) {
  let flatArr = [];
  arr.forEach(function(elem) {
    if (Array.isArray(elem)) {
      //console.log("true");
      elem.forEach(function(element) {
        flatArr.push(element);
      });
    } else {
      flatArr.push(elem);
    }
  });
  return flatArr;
};

//console.log(flatten([1, 2, [3, 4], 5, [6]]));