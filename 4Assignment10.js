// taking input array from the user
const arr = prompt("Enter an array: ").split(",").map(Number);

// array to store duplicate elements
const duplicateElements = [];

// set to store unique elements
const uniqueElements = new Set();

// iterating over each element of input array
for(let i=0; i<arr.length; i++){
  // if element is already present in the set, it is a duplicate
  if(uniqueElements.has(arr[i])){
    duplicateElements.push(arr[i]); // adding to duplicate array
  }
  else{
    uniqueElements.add(arr[i]); // adding to set
  }
}

// converting set back to array
const arrWithoutDuplicates = Array.from(uniqueElements);

// printing the output
console.log("Duplicate Elements = " + duplicateElements);
console.log("Array without duplicate elements = " + arrWithoutDuplicates);
