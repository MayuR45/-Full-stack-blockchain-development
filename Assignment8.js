//1). Can we put duplicate values in the set object ?
//answer-No, 
Set object only stores unique values. 
If you try to add a duplicate value to a Set, it will be ignored.

//2)Write the syntax for
//a) Creating new set object
let setObj = new Set();

//b) Adding new element to set object
setObj.add(element);


//c) Deleting element from set object
setObj.delete(element);


//3)Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods.

// Create a set object with four random numbers from 0 to 10
const mySet = new Set([2, 4, 6, 8]);

// Check if the set object has 8 in it
if (mySet.has(8)) {
  console.log('The set object has 8 in it');
} else {
  console.log('The set object does not have 8 in it');
}
