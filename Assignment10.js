//1)Are Higher Order functions and Call back functions the same ? If not,
briefly explain about both functions.
A=Higher order functions are functions that can take another function as an argument or return a function as a result. Callback functions are functions that are passed as arguments to other functions and are executed by those functions. So, callback functions are a type of higher order function.

2)Is filter a Higher Order function in Javascript ? If yes, why ?
A=Yes, filter() is a Higher Order function in JavaScript because it takes in a function as an argument and returns a new array based on the conditions defined in that function. The function provided to filter() is a callback function, which is executed for each element in the array, and the returned value is used to filter the elements in the new array.

3)Give an example of a Higher Order function and a call back function
used in the same program.

// Higher Order function
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

// Callback functions
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

// Usage
console.log(calculate(5, 2, add)); // Output: 7
console.log(calculate(5, 2, multiply)); // Output: 10


4)Carefully check the example below:
a) What will be the output of this program ?
A=Hello John
Hello Tina
Hello Kale
Hello Max


b) Which function is a Higher Order function here ?
A=The useFunction() function is a Higher Order Function

const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[I]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);
