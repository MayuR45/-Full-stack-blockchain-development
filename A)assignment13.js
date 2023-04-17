let arr = prompt("Enter an array of numbers, separated by commas:").split(",").map(Number);

// Sum of all elements in the array
let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);

// Average of all elements in the array
let average = arr.reduce((total, num, index, array) => {
  total += num;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
}, 0);
console.log(average);
