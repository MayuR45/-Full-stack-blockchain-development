function truncateString(S) {
  if (S.length > 4) {
    return S.substring(0, 4) + '...';
  } else {
    return S;
  }
}

console.log(truncateString('Ice')); // Output: Ice
console.log(truncateString('Icecream')); // Output: Icec...
