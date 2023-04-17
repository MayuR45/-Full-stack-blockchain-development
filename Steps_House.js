function matchHouses(step) {
  // Check if step is 0 or negative
  if (step <= 0) {
    return 0;
  }

  // Calculate the number of matchsticks using the formula
  // Number of matchsticks = 5*step + 1
  return 5*step + 1;
}

// Example usage
console.log(matchHouses(1)); // 6
console.log(matchHouses(4)); // 21
console.log(matchHouses(87)); // 436
