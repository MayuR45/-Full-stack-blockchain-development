function find_largest(arr, n) {
  if (n > arr.length) {
    return null; // invalid input
  }
  
  // sort the array in descending order
  arr.sort((a, b) => b - a);
  
  // return the nth largest number
  return arr[n - 1];
}
const arr = [3, 45, 6, 7, 23, 5, 7, 8];
console.log(find_largest(arr, 3)); // output: 8
