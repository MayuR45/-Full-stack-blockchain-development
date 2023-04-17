let originalArray = [1, 2, 3, 4, 5];

let squaresArray = originalArray.map(function (element) {
  return element * element;
});

let squaresMapping = squaresArray.map(function (element) {
  return element;
});

console.log(squaresArray);
