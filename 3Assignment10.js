function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// Example usage:
const deepArray = [1, 2, [3, 4, [5]]];
const flatArray = flattenArray(deepArray);
console.log(flatArray); // [1, 2, 3, 4, 5]
