// Function expression

// sayHi() - this won't work
// we cannot call a function expression before declaring it
const sayHi = function () {
  console.log("Hi!");
};

sayHi();

// This works, we can invoke a function declaration before declaring it
hello();

function hello() {
  console.log("hello from function declaration");
}

// Declaring a function
const square = function (num = 0) {
  console.log(num * num);
};

square(10); // 100
square(); // 0

const sum = function (a, b) {
  console.log(a + b);
};

sum(1, 2); // 3

// Function expressions with ternary operators
const age = 22;

const greeting = age < 18 ? function () {} : function () {};

greeting(23); // greetings

// If the number is divisable by 3 and 5 we want to print FizzBuzz
// If the number is divisable by 5 we want to print Buzz
// If the number is divisable by 3 we want to print Fizz
const fizzBuzz = function (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log("None of those worked for me");
  }
};

fizzBuzz(13); // None of those worked for me
fizzBuzz(15); // FizzBuzz
fizzBuzz(5); // Buzz
fizzBuzz(3); // Fizz
