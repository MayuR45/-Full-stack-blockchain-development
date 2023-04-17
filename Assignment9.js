1. Carefully observe this example.
a) Is the InnerFunction() a closure?
A=Yes,
the InnerFunction() is a closure as it accesses the outerVariable of the parent function OuterFunction().
b) What is output of this program?
function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

A=The output of this program will be an alert box with the message "100".


2. What is the difference between a closure and a scope ?
A=scope refers to the visibility and accessibility of variables and functions in a particular context or block of code.
a closure is a function that has access to the outer (enclosing) function's variables, even after the outer function has returned.

3)What is a lexical scope and how is it related to closure?
A=Lexical scope is the way that a programming language determines the scope of a variable based on its location in the source code. 
Closures, on the other hand, refer to the ability of a function to access variables that are defined outside of its own scope. 

4)Output of following closure ?
for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}

A=The output of this code will be:
3
3
3
