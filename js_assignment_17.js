1. Create a function to iterate over the following list [“John”,
“Rohn”, “Danny”, “James”]

A=function iterateList(list) {
  list.forEach((item) => {
    console.log(item);
  });
}

// Example usage:
const list = ["John", "Rohn", "Danny", "James"];
iterateList(list);
// Output:
// John
// Rohn
// Danny
// James

2. Iterate over all the characters of the word “iNeuron”

A=const word = "iNeuron";
for(let i = 0; i < word.length; i++){
  console.log(word[i]);
}
output=
i
N
e
u
r
o
n

3. Create a functional iterator, with a next function.
A=function iterator(array) {
  let index = 0;

  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    }
  };
}

// Example usage:
const myIterator = iterator([1, 2, 3]);

console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { done: true }

4. In the following two arrays find which two elements match
using iterators.
Array 1 - [“a”, “b”, “c”, “d”]
Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]

A=const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "h", "a", "i", "j"];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    console.log(`Found a match: ${arr1[i]}`);
  }
}

5. What are the different ways of iterating through an array?
demonstrate them.

A=
//Using a for loop:
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Using a forEach loop:
const arr = [1, 2, 3, 4, 5];

arr.forEach(function(item) {
  console.log(item);
});

//Using a for...of loop:
const arr = [1, 2, 3, 4, 5];

for (const item of arr) {
  console.log(item);
}

//Using a map function:
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(item) {
  return item * 2;
});

console.log(newArr);

//Using a filter function:
const arr = [1, 2, 3, 4, 5];

const filteredArr = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filteredArr);

//Using a reduce function:

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function(total, item) {
  return total + item;
}, 0);

console.log(sum);

