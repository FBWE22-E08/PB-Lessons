// Map array method

// Map does not change the original array
// Map creates a new array

const numbers = [1, 2, 3, 4, 5];

// Achieving the same thing, without using the map array method
const result = [];
for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * 2);
}

console.log(result, "result"); // [ 2, 4, 6, 8, 10 ]

// Creates a new array with all the values doubled
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
// Shorter version
const doubledNumbersShorter = numbers.map((num) => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Creates a new array with all the values squared
const squaredNumbers = numbers.map(function (num) {
  return num ** 2;
});
// Shorter version
const squaredNumbersShorter = numbers.map((num) => num ** 2);

console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]

const names = ["John", "Steve", "Ivo"];

const lengths = names.map(function (name) {
  return name.length;
});

const lenghtsShorter = names.map((name) => name.length);

console.log(lengths); // [4, 5, 3]
