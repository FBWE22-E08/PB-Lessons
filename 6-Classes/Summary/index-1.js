// Private members of classes

class User {
  email = "max@gmail.com";
  #password = 123456;

  signin(email, pass) {
    if (email === this.email && pass === this.#password) {
      console.log("Sign in");
    } else {
      console.log("Sign in failed");
    }
  }
}

const user = new User();

console.log(user.email); // max@gmail.com

// Problem: We can access the password property from outside the class
console.log("Problem => ", user.password); // 123456

user.signin("max@gmail.com", 123456);

/********* Static***********/

class Student {
  static fullName() {
    return "John Doe";
  }

  info() {
    return "My name is John and my age is 30";
  }
}

// const student = new Student();

console.log(Student.fullName()); // John Doe

// console.log(Math.max(1,2,3))

/******** JavaScript Class Getters and Setters ********/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `My name is ${this.name} and my age is ${this.age}`;
  }

  set info(value) {
    this.name = value;
  }
}

const person = new Person("John", 30);

console.log(person.info); // My name is John and my age is 30

person.info = "Max";

console.log(person.info); // My name is Max and my age is 30
