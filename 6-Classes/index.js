// Regular class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.role = "user";
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  }
}

const user = new User("Jack", 43);

console.log(user);
user.sayHi();

const userSecond = new User("Steve", 25);

userSecond.sayHi();

// Class expression - same like a function expression
const UserTwo = class {
  sayHi() {
    console.log("Hi from the second class");
  }
};

const test = new UserTwo();
console.log(test);
test.sayHi();

class Vehicle {
  constructor(type, maxSpeed, numOfWheels) {
    this.type = type;
    this.maxSpeed = maxSpeed;
    this.numOfWheels = numOfWheels;
  }

  start() {
    console.log(
      `I am a ${this.type}, my maximum speed is ${this.maxSpeed} and I have ${this.numOfWheels} wheels`
    );
  }

  stop() {
    console.log(`I am a ${this.type}, and I stopped moving`);
  }
}

const car = new Vehicle("car", 240, 8);

console.log(car);

car.start();

const bike = new Vehicle("bike", 320, 2);
bike.start();
