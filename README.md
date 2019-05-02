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

When a promise is ready, its .then/catch/finally handlers are put into the queue. They are not executed yet. Javascript engine takes a task from the queue and executes it, when it becomes free from the current code.
![](http://javascript.info/article/microtask-queue/promiseQueue.png)
*  .then/catch/finally is called after the current code is finished.
*  Microtask queue has a higher priority than the macrotask queue.
*  As a side effect, macrotasks are handled only when promises give the engine a “free time”. -> Macrotasks run after the code is finished and after the microtask queue is empty.
### Modules
* Modules are executed only once when there are multiple imports.  Good for configuration, where module values are set only on first import, and then used throughout all imports.
