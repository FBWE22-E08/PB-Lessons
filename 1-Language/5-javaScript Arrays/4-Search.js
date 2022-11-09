// Search Methods

// indexOf
const arr = [1, 0, false];

console.log("arr.indexOf(0) => ", arr.indexOf(0)); // 1
console.log("arr.indexOf('false') => ", arr.indexOf("false")); //  -1 ???
console.log("arr.indexOf(false) => ", arr.indexOf(false)); // 2

// index          0         1        2
const fruits = ["Apple", "Orange", "Mango"];

console.log('fruits.indexOf("mango")', fruits.indexOf("mango")); //  -1
console.log('fruits.indexOf("Mango")', fruits.indexOf("Mango")); // 2

// index           0       1           2           3
const fruits_2 = ["Apple", "Orange", "Mango", "Apple"];

console.log('fruits_2.indexOf("Apple")', fruits_2.indexOf("Apple", 2)); // 3

console.log("##############################");

// includes

const colors = ["red", "blue", "pink"];

console.log("PILAR".toLowerCase()); // pilar

console.log('colors.includes("Blue") => ', colors.includes("Blue")); // false
console.log(
  'colors.includes("Blue") => ',
  colors.includes("BLUE".toLowerCase())
); // true
