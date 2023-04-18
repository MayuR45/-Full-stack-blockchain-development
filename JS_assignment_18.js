1. What is the difference between a generator and a function?
A=A generator is a special type of function that can be paused and resumed during its execution. It can yield multiple values one at a time and then be resumed from where it left off, whereas a regular function executes its code from start to finish and returns a single value or performs an action.

2. What is the syntax of a generator?
A=A generator function is declared using an asterisk (*) after the function keyword, and it contains one or more yield expressions,
function* generatorFunction() {
  // code goes here
  yield value;
}

3. Are function generators iterable in JavaScript?
A=Yes,
function generators are iterable in JavaScript. 
When a generator function is called, it returns an iterator object. 
This iterator object can be used to iterate through the values generated by the generator function using the next() method. So, we can say that generators are a type of iterable in JavaScript.

4. Create a generator for multiplying?
Output =
-2*2=?
-4
-3*3=?
-6
-true

A=function* multiply() {
  const result1 = yield -2 * 2;
  console.log(result1);
  const result2 = yield -3 * 3;
  console.log(result2);
  const result3 = yield true;
  console.log(result3);
}

const generator = multiply();

console.log(generator.next().value); // -4
console.log(generator.next(-6).value); // -9
console.log(generator.next('done').value); // true

5. Print an infinite series of natural numbers using a generator.
A=
function* naturalNumbers() {
  let number = 1;
  while (true) {
    yield number;
    number++;
  }
}

// Usage:
const generator = naturalNumbers();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
// and so on...

6.Create a generator that can throw an exception.

A=function* generatorWithException() {
  try {
    yield 1;
    yield 2;
    throw new Error('Exception occurred!');
    yield 3;
  } catch (err) {
    yield err.message;
  }
}

const gen = generatorWithException();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.throw()); // { value: 'Exception occurred!', done: false }
console.log(gen.next()); // { value: undefined, done: true }