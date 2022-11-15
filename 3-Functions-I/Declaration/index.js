// Function declaration
function sayHello() {
  console.log("Hello!");
}

// Calling/invoking a function
sayHello();
sayHello();
sayHello();

// Functions have access to variables outside of it
const userName = "John";

// Function declaration
function greetJohn() {
  console.log(`Hello ${userName}`); // Hello John
}

// Calling/invoking a function
greetJohn();
