// callstack : It is a simple data structure provided by V8 javascript engine. It keeps track of all functions running.
// It follows first in last out (FIFO)
// whenever we call a function, that gets added in the stack after the main()
// once the function gets executed, it gets popped off from the Callstack.


//synchronous example
//For synchronous calls, only callstack is used
console.log('Sync example - start')
const x = 1
const y = x + 2

console.log('Sum is : ', y) //this gets added after the main()


//asynchronus example
//For asynchronous calls, internally callstack, node APIs, callback queue and event loop are used together
console.log('Async example')
console.log('starting')

setTimeout(() => {
    console.log('after 2 seconds')              //In this case, both the setTimeout gets executed after the other 2 logs
}, 2000)

setTimeout(() => {                              // setTimeout is not a method of javascript, its given by nodeJS for asynchronos calls
    console.log('after 0 seconds')
}, 0)

console.log('stopping')

//setTimeout methods gets added under Node APIs. On the basis of seconds provided for the method to execute,
// it gets added to callback queue. If no functions/methods are available in callstack, then only callback queue's added
// methods gets executed. But, if any methods are there in callstack, then it gets executed first.