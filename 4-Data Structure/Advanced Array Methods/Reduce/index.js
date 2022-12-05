// Reduce array method

// We use reduce method to convert an array into a single value

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum); // 15

const sumTwo = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 100);

console.log(sumTwo); // 115
