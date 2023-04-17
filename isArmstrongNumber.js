function isArmstrongNumber(num) {
  let sum = 0;
  let temp = num;
  const digits = num.toString().length;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return num === sum;
}

// Example usage
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(370)); // true
console.log(isArmstrongNumber(371)); // true
console.log(isArmstrongNumber(407)); // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(9475)); // false
