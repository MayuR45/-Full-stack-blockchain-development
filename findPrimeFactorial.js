function findPrimeFactorial(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        console.log(`${i}! = ${factorial(i)}`);
      }
    }
  }
  
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  findPrimeFactorial(1, 100);
  