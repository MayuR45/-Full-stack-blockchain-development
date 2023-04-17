function isSpecialNumber(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    const digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
  }

  return num === sum;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Example usage
console.log(isSpecialNumber(145)); // true
console.log(isSpecialNumber(40585)); // true
console.log(isSpecialNumber(1634)); // true
console.log(isSpecialNumber(8208)); // true
console.log(isSpecialNumber(9474)); // true
console.log(isSpecialNumber(9475)); // false
