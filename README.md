# javascript-practice

### Object methods
* `object.method` returns Reference Type
    ```
    var hi = user.hi;
    hi();
    // hi's "this" is undefined
    ```
* Arrow functions don't have their own `this`. Taken from outer function.
### Map
* Map allows for keys of any data type -> doesn't convert to string like objects
### Prototypal inheritance
```
SubClass.prototype.__proto__ = BaseClass.prototype;
// or like this:
SubClass.prototype = Object.create(BaseClass.prototype);
```
### Promises
```
new Promise(
    (resolve, reject) => resolve(1) // (*)
).then(
    result => console.log(result) // (**)
);
```
* (*) promise executor
* (**) promise handler

* When a promise is ready, its .then/catch/finally handlers are put into the queue. They are not executed yet. Javascript engine takes a task from the queue and executes it, when it becomes free from the current code.
![](http://javascript.info/article/microtask-queue/promiseQueue.png)
