class Tester {
    constructor() {
        this.x = 1
        this.getX = () => this.x
    }
}

let test = new Tester()
console.log(test.getX()) // 1 - uses this of constructor()
// https://stackoverflow.com/a/48920356/6206295
console.log(test)

let test2 = {
    x: 1,
    getX: () => this.x
}
console.log(test2.getX()) // undefined - uses global this
console.log(test2)

function Tester3() {
    this.x = 1
    this.getX = () => this.x 
}

let test3 = new Tester3()
console.log(test3.getX()) // 1 - uses this of Tester3()
console.log(test3)