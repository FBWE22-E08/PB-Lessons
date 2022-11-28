const greet = function () {
  console.log("hi");
};

greet();

// Methods are functions stored as properties on an object.

const user = {
  name: "John",
  age: 22,
  greeting: function () {
    console.log("hi from the obj"); // Hi, my name is John and my age is 22.
  },
};

user.greeting();

Math.max(2, 324, 1234);
Math.min(2, 324, 1234);
// Keyword THIS
const userB = {
  name: "Steven",
  age: 56,
  greeting: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  },
};

userB.greeting();

// Type of objects
const x = {};
console.log(typeof x); // object

const y = [];
console.log(typeof y); // object

// How to know if an element is an array
console.log(Array.isArray(y));
