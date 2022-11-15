const sayHi = () => {
  console.log("Hi from an arrow function");
};

sayHi();

function sum(a, b) {
  return a + b;
}

const addition = sum(2, 4); // 6
console.log(addition); // 6

// Multi line arrow function have to have curly braces
const sumShort = (a, b) => {
  return a + b;
};

// One-liner arrow function can be written without curly braces
const sumShortest = (a, b) => a + b;

console.log(sumShort(2, 3));

const age = 22;
const greeting =
  age < 18
    ? () => {
        console.log("hi buddy");
      }
    : () => {
        console.log("greetings");
      };

greeting();

const getUser = () => {
  console.log("User is John");
};
