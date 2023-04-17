function checkTriangle(a, b, c) {
    if (a === b && b === c) {
      return "equilateral";
    } else if (a === b || b === c || a === c) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  console.log(checkTriangle(3, 3, 3)); // prints "equilateral"
  console.log(checkTriangle(3, 4, 4)); // prints "isosceles"
  console.log(checkTriangle(3, 4, 5)); // prints "scalene"
        