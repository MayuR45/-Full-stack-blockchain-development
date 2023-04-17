//a) To convert a string into uppercase, we can use the toUpperCase() method.
let str = "hello world";
str = str.toUpperCase();
console.log(str); // "HELLO WORLD"

//b) To convert only the first character of a string to uppercase, we can use the charAt() and toUpperCase() methods.
let str = "hello world";
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str); // "Hello world"

//c) To convert a string into lowercase, we can use the toLowerCase() method.
let str = "HELLO WORLD";
str = str.toLowerCase();
console.log(str); // "hello world"

//d) To break the string into two halves and swap them, we can use the slice() method.
let str = "hello world";
let half = Math.floor(str.length / 2);
str = str.slice(half) + str.slice(0, half);
console.log(str); // "worldhello "

//e) To count the repeating characters in a string, we can use a loop to iterate through the string and store the count of each character in an object.
let str = "hello world";
let charCount = {};
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }
}
console.log(charCount); // {h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1}

//f) To reverse a string, we can use the split(), reverse(), and join() methods.
let str = "hello world";
str = str.split("").reverse().join("");
console.log(str); // "dlrow olleh"
