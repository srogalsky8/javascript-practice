let obj = new Object()
console.log(obj.toString())
obj.prototype = {}
console.log(obj.toString()) // why does this work