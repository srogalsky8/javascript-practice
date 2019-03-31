function Animal() {
    this.sleep = function () {
        console.log('Zzzzz')
    }
}
Animal.prototype.eat = function () {
    console.log('Mmmmm')
}
Animal.prototype.living = true

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype) // make subclass of Animal
Rabbit.prototype.hop = function () {
    console.log('boing')
}

let rabbit = new Rabbit()
rabbit.eat() // works, inherited
console.log(rabbit.living)
console.log(rabbit.__proto__.__proto__ == Animal.prototype) // true
rabbit.hop()
rabbit.sleep() // will error since it's not on the prototype