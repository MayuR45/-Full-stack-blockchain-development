function rightShift(num, shift) {
  if (shift <= 0) {
    return num;
  } else {
    return rightShift(Math.floor(num / 2), shift - 1);
  }
}
