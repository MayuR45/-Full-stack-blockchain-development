function factorializeUsingForLoop(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  console.log("Factorial of 9 -> " + factorializeUsingForLoop(9));