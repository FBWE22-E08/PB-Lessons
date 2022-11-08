/**
 * Number operations
 */

const addition = 2 + 2; // 4
const subtratction = 4 - 2; // 2
const multiplitcation = 3 * 2; // 6
const division = 4 / 2; // 2

// Modulo or remainder - remaining amount after one number is divided by another number
const remainder = 5 % 2; // 1
console.log("remainder:", remainder);

const isEven = 10 % 2; // 0

// toFixed - rounding a float to a certain decimal point
const float = 2.34567;

console.log("float to fixed 2", float.toFixed(2)); // 2.35
console.log("float to fixed 3", float.toFixed(3)); // 2.346
console.log("float to fixed 4", float.toFixed(4)); // 2.3457

/**
 * Math object
 */

let num;

// Math.ceil - always round the number up
num = 0.00001;
const ceiling = Math.ceil(num);
console.log(`Math ceil always rounds up: ${num} will become ${ceiling}`);

// Math.floor - always round the number down
num = 122.8;
const floor = Math.floor(num);
console.log(`Math floor will always round down: ${num} will become ${floor}`);

// Math.round - if greater than 0.5, it will round up. otherwise it will round down
num = 0.49;
let rounded = Math.round(num);
console.log(`Math rounds up and down: ${num} will become ${rounded}`);

num = 0.5;
rounded = Math.round(num);
console.log(`Math rounds up and down: ${num} will become ${rounded}`);

// Math.random - returns a random number between 0 and 0.99999999
const randomNumber = Math.random();
console.log("the random number:", randomNumber);

// Generating a random number between 0 and 50
console.log(Math.floor(Math.random() * 50));

// Math.max
const max = Math.max(1, 100, 235, 5); // 235
console.log("maximum value:", max);

// Math.min
const min = Math.min(1, -100, 24, 0); // -100
console.log("minimum value:", min);
