Async/Await Assignment
1). How does async/await help with performance and scalability?
A=Async/await is a programming paradigm in JavaScript that helps improve performance and scalability. With async/await, asynchronous code can be written in a synchronous style, making it easier to read, write, and maintain. This allows for more efficient code execution and can improve the overall performance of an application. Additionally, async/await helps improve scalability by allowing for the execution of multiple asynchronous tasks simultaneously, without blocking the execution of other tasks.

2). Is it possible to use async/await with promise chains? If yes,
how can this be achieved?
A=Yes, it is possible to use async/await with promise chains. In fact, async/await is built on top of promises.
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1');
    }, 1000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2');
    }, 500);
  });
}

async function promiseChain() {
  const result1 = await promise1();
  console.log(result1);

  const result2 = await promise2();
  console.log(result2);
}

promiseChain();


3). Give 3 real world examples where async/await has been used?
A=
Server-side operations: Async/await is often used for server-side operations that require fetching data from an API or database. For example, when building a web app, async/await can be used to fetch user data and display it in real-time without blocking the UI.

File Uploads: Async/await can be used to upload large files to a server in the background without blocking the user interface. This helps to improve the user experience by allowing the user to continue interacting with the application while the file is being uploaded.

Image Processing: Async/await can be used to perform time-consuming image processing tasks, such as resizing or cropping images, without blocking the user interface. This helps to keep the application responsive and improves the user experience.

4).
async function inc(x) {
x = x + await 1
return x;
}
async function increment(x){
x = x + 1
return x
}
inc(1).then(function(x){
increment(x).then(function(x){
console.log(x)
})
})
Find output.

A=The output will be 3.

5).
let p = new Promise(function (resolve, reject) {
reject(new Error("some error"));
setTimeout(function(){
reject(new Error("some error"));
},1000)
reject(new Error("some error"));
});
p.then(null, function (err) {
console.log(1);
console.log(err);
}).catch(function (err) {
console.log(2);
console.log(err);
});
Find output.

A=1
Error: some error

6).
async function f1() {
console.log(1);
}
async function f1() {
console.log(2);
}
console.log(3);
f1();
console.log(1);
f2();
async function f2() {
console.log("Go!");
}
Find output.

A=3
1
2
Go!

7).
function resolveAfterNSeconds(n,x) {
return new Promise(resolve => {
setTimeout( ( ) = {
resolve(x);
}, n);
});
}
(function(){
let a = resolveAfterNSeconds(1000,1)
a.then(async function(x){
let y = await resolveAfterNSeconds(2000,2)
let z = await resolveAfterNSeconds(1000,3)
let p = resolveAfterNSeconds(2000,4)
let q = resolveAfterNSeconds(1000,5)
console.log(x+y+z+await p +await q);
})
})()
Find output

A=11

8). Is it possible to nest async functions in JavaScript? Explain with
examples.
A=Yes, it is possible to nest async functions in JavaScript.
async function outerFunction() {
  const result = await innerFunction();
  console.log(result);
}

async function innerFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

outerFunction(); // Output: "Hello, world!"

9). What is the best way to avoid deadlocks when using
async/await?
A=The best way to avoid deadlocks when using async/await is to make sure that you don't have any long-running blocking operations inside the critical sections of your code.
This means avoiding using synchronous APIs or functions inside an async function that runs on the main thread. Instead, you should use asynchronous APIs or functions to avoid blocking the main thread. 


10). In which scenarios would you use synchronous code instead of
asynchronous code?
A=synchronous code can be used in scenarios where the task at hand is small, does not require input/output operations, and does not block the main thread.
 Additionally, synchronous code can be used when the simplicity of the code is more important than the performance or scalability. 
For example, simple utility functions or code that is only run once during application startup can be synchronous. However, in most cases, asynchronous code is preferred because it provides better performance, scalability, and responsiveness for applications that rely on I/O operations or other blocking tasks.