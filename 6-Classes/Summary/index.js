//let name = "Pilar";

class ClassName {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  test() {
    // let name = "Tommy";
    console.log(this.name);
  }
}

const className = new ClassName("Max", 30);
const className_2 = new ClassName("Alex", 28);

className.test(); // ReferenceError: name is not defined

console.log(className); // {"name":"Max","age":30}
console.log(className_2); // {"name":"Alex","age":28}

/******************** */

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const Req = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

const req = new Req(10, 20);

/*************** Hoisting ****************/

test(); // test

function test() {
  console.log("test");
}

class Test {
  constructor() {
    console.log("test class");
  }
}

new Test(); // test class

/***************************/

let now = new Date();

console.log(now); // 2022-12-14T09:04:12.434Z

let oldDate = new Date(24 * 3600 * 1000);

console.log(oldDate); // 1970-01-01T00:00:00.000Z

let date_1 = new Date("2017-02-26");

let date_2 = new Date("2019-02-26");

console.log(date_1.getFullYear); // 2017
console.log(date_2.getFullYear()); // 2019

// Get how many years between two dates
console.log(date_2.getFullYear() - date_1.getFullYear()); // 2

/***************************/

class Person {
  name = "Max"; // property
  info() {
    // method
  }
}

/***************************/

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

const car = new Car("Ford", 2014);

console.log(car.age()); // 8

/************************ */

class Animals {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sing() {
    return `${this.name} can sing`;
  }
  dance() {
    return `${this.name} can dance`;
  }
}

// const animals = new Animals("Max", 30);

class Cats extends Animals {
  constructor(name, age, color) {
    // new Animals("Max", 30);
    super(name, age);
    this.color = color;
  }
}

let clara = new Cats("Clara", 33, "indigo");

console.log(clara.sing()); // Clara can sing
