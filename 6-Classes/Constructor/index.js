// Object literal
const userOne = {
  name: "Anna",
  age: 22,
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

userOne.sayHi(); // Hi, my name is Anna

const userTwo = {
  name: "John",
  age: 56,
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

userTwo.sayHi(); // Hi, my name is John

// Function constructor
// Naming convention - we use capital letters for function constructors
function User(name, age) {
  this.name = name;
  this.age = age;
  this.role = "user";
  this.sayHi = function () {
    return console.log(`Hi, my name is ${this.name}`);
  };
  //   If we return something, the function constructor will return what we return

  //   Function constructors work, only if we don't return anything
  //   return {};
}

const user = new User("Jack", 43);
user.sayHi();

const userThree = new User("Marie", 78);
userThree.sayHi();

function Vehicle(type, maxSpeed, numOfWheels) {
  this.type = type;
  this.maxSpeed = maxSpeed;
  this.numOfWheels = numOfWheels;
  this.start = function () {
    console.log(
      `I am a ${this.type}, my maximum speed is ${this.maxSpeed} and I have ${this.numOfWheels} wheels`
    );
  };

  this.stop = function () {
    console.log(`I am a ${this.type}, and I stopped moving`);
  };
}

const car = new Vehicle("car", 140, 4);

console.log(car);
car.start();
car.stop();

const bike = new Vehicle("bike", 40, 2);

bike.start();

// Factory function - a function which returns objects
const createUser = (name, age) => {
  const obj = {
    name: name,
    age: age,
    sayHi: function () {
      console.log(`${this.name} says hi`);
    },
  };

  return obj;
};

const userFour = createUser("Steve", 42);

userFour.sayHi();
