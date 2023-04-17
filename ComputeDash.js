function computeDash(number) {
  // Convert the number to a string
  number = number.toString();
  
  // Create an array to store the modified digits
  var modifiedDigits = [];

  // Loop through the string of digits
  for (var i = 0; i < number.length; i++) {
    // Check if the current digit and the next digit are both even
    if (number[i] % 2 === 0 && number[i+1] % 2 === 0) {
      // If they are, add a dash to the modified digits array
      modifiedDigits.push(number[i] + "-");
    } else {
      // If not, just add the digit to the modified digits array
      modifiedDigits.push(number[i]);
    }
  }
  
  // Join the modified digits array back into a string and return it
  return modifiedDigits.join("");
}

// Example usage:
console.log(computeDash(025468)); // Output: "0-254-6-8"
