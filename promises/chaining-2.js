new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  console.log(result); // 1
  return result * 2; // returns a promise that immediately resolves

}).then(function(result) { // (***)

  console.log(result); // 2
  return new Promise(function(resolve, reject) {
      resolve(result*2);
  })

}).then(function(result) {

  console.log(result); // 4
  throw new Error('Automatically returns a rejected promise!')

}).catch(function(error) {
    console.log(error);
});