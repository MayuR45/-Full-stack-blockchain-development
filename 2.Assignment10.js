// Take two arrays from the user
const arr1 = prompt("Enter first array (comma separated)").split(",");
const arr2 = prompt("Enter second array (comma separated)").split(",");

// Check if 4 exists in arr1, arr2, or both
const inArr1 = arr1.includes("4");
const inArr2 = arr2.includes("4");

if (inArr1 && inArr2) {
  console.log("4 in both arrays");
} else if (inArr1) {
  console.log("4 in array 1");
} else if (inArr2) {
  console.log("4 in array 2");
} else {
  console.log("4 not found in any array");
}
