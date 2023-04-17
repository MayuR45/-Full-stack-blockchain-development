// take array input from user
const arr = prompt("Enter an array of numbers, separated by commas: ").split(",").map(Number);

// initialize variables
let sumOdd = 0;
let sumEven = 0;
let countOdd = 0;
let countEven = 0;

// calculate sums and counts
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    sumOdd += arr[i];
    countOdd++;
  } else {
    sumEven += arr[i];
    countEven++;
  }
}

// calculate difference, average and GCD
const diff = Math.abs(sumOdd - sumEven);
const avg = arr.reduce((acc, curr) => acc + curr) / arr.length;
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const gcdSum = gcd(sumOdd, sumEven);

// output results
console.log(`Difference = ${diff}`);
console.log(`Odd Elements = ${countOdd}`);
console.log(`Even Elements = ${countEven}`);
console.log(`Average = ${avg}`);
console.log(`GCD = ${gcdSum}`);
