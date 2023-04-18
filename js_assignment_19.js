PROMISES ASSIGNMENT
1).
function job() {
return new Promise(function(resolve, reject) {
reject();
});
}
let promise = job();
promise
.then(function() {
console.log('Success 1');
})
.then(function() {
console.log('Success 2');
})
.then(function() {
console.log('Success 3');
})
.catch(function() {
console.log('Error 1');
})
.then(function() {
console.log('Success 4');
});
What is the output of the code above ?

A=The output of the code above will be:
Error 1
Success 4

2). Write a sleep function using a promise in javascript?
A=function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
console.log('Starting...');
await sleep(2000);
console.log('Two seconds have passed!');

3)What is the output of the following code?
const promise = new Promise(res => res(2));
promise.then(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
return v * 2;
})
.finally(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
});

A=The output of the following code will be:

2
4
undefined
8

4).
console.log('start')
const fn = () => (new Promise((resolve, reject) => {
console.log(1);
resolve('success')
}))
console.log('middle')
fn().then(res => {
console.log(res)
})
console.log('end')
What is the output of this code snippet?

A=The output of this code snippet will be:

start
middle
1
end
success

5). Write a function delay that returns a promise. And that promise
should return a setTimeout that calls resolve after 1000ms.
A=function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}
console.log('start');
delay(1000).then(function() {
  console.log('after 1000ms');
});
console.log('end');

6).
Promise.resolve('Success!')
.then(data => {
return data.toUpperCase()
})
.then(data => {
console.log(data)
})
What will the output be?

A=The output of this code will be SUCCESS!.

7).
var p = new Promise((resolve, reject) => {
reject(Error('The Fails!'))
})
.catch(error => console.log(error))
.then(error => console.log(error))
What will the output be?

A=The output will be an error message "Error: The Fails!"

8).
console.log('start')
setTimeout(() => {
console.log('setTimeout')
})
Promise.resolve().then(() => {
console.log('resolve')
})
console.log('end')
What will the output be?

A=start
end
resolve
setTimeout

10).
console.log('start')
Promise.resolve(1).then((res) => {
console.log(res)
})
Promise.resolve(2).then((res) => {
console.log(res)
})
console.log('end')
What will the output be?

A=start
end
1
2
