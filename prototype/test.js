class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

// ...
}
  
class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

// ...
}
  
// now fine
let rabbit = new Rabbit("White Rabbit", 10);
let objectToString = Object.prototype.toString;
console.log(objectToString.call(rabbit))