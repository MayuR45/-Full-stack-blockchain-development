function handleInput(input) {
  const lowerInput = input.toLowerCase();
  if (lowerInput === "yes") {
    return "Valid input: Yes";
  } else {
    return "Invalid input";
  }
}
