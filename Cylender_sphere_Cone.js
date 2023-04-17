class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }

  getVolume() {
    let volume = (4/3) * Math.PI * Math.pow(this.radius, 3);
    return volume.toFixed(4);
  }
}

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    let volume = (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
    return volume.toFixed(4);
  }
}

// Example usage
let cylinder = new Cylinder(2, 5);
console.log(cylinder.getVolume()); // Output: 62.8319

let sphere = new Sphere(3);
console.log(sphere.getVolume()); // Output: 113.0973

let cone = new Cone(4, 6);
console.log(cone.getVolume()); // Output: 100.5309
