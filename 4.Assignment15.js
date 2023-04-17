function triangle(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i*(i+1)/2;
  }
  return sum;
}
console.log(triangle(1)); // Output: 1
console.log(triangle(6)); // Output: 56
