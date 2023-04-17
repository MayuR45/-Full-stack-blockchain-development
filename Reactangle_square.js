class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  
  area() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}
