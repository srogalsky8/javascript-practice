function User(initialName) {
    let name = initialName
    this.getName = function() {
        return name
    }
    this.setName = function(newName) {
        name = newName
    }
}

let user = new User('Steven')
console.log(user.getName()) // accesses name in the lexical environment outside of getName
user.setName('Stevo')
console.log(user.getName()) // been updated from setter
console.log(user.name) // undefined - our private variable