// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
// my Solution
class Shape {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculateArea (width, height) {
        return (this.width * this.height) / 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea (radius) {
        return Math.PI * (this.radius ** 2);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    calculateArea (width, height) {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(2, 3);
const circle1 = new Circle(2, 5);
const shape = new Shape(2, 7);



// w3Resource solution
class Shape {
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be overridden in subclasses");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// Create an instance of the Circle class
const circle = new Circle(7);
const circleArea = circle.calculateArea();
console.log(`Circle Area: ${circleArea}`);

// Create an instance of the Rectangle class
const rectangle = new Rectangle(8, 9);
const rectangleArea = rectangle.calculateArea();
console.log(`Rectangle Area: ${rectangleArea}`);
