function swapWords(str) {
  let words = str.split(' ');
  let temp = words[0];
  words[0] = words[1];
  words[1] = temp;
  return words.join(' ');
}

console.log(swapWords("Hii Boy")); // Output: "Boy Hii"
