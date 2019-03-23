/**
 * From javascript.info
 */
function Rabbit() {}

let rabbit1 = new Rabbit();
console.log(rabbit1.constructor);

Rabbit.prototype = {
  jumps: true
};
let rabbit2 = new Rabbit();
console.log(rabbit2.constructor === Rabbit); // false