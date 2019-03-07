function printVal(value) {
  return function() {
    console.log(value);
  }
}
  
function run() {
  var arr = [1, 2, 3];

  // All 3 looped through functions share scope
  printArr1 = [];
  for(var i = 0; i < arr.length; i++) {
    var value = arr[i];
    printArr1.push(function () {
      console.log(value);
    });
  }
  for(var i = 0; i < printArr1.length; i++) {
    printArr1[i](); // 3, 3, 3
  }

  // Each call to printVal creates a lexical scope
  printArr2 = [];
  for(var i = 0; i < arr.length; i++) {
    var value = arr[i];
    printArr2.push(printVal(value));
  }
  for(var i = 0; i < printArr2.length; i++) {
    printArr2[i](); // 1, 2, 3
  }
  
  // forEach creates a scope for each element
  printArr3 = [];
  arr.forEach(function(val) {
    var value = val
    printArr3.push(function () {
      console.log(value)
    });
  });
  for(var i = 0; i < printArr3.length; i++) {
    printArr3[i](); // 1, 2, 3
  }

}
  
run();