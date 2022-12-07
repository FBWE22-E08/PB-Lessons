const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(numbers) {
  const box = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      box.push(numbers[i]);
    }
  }
  return box;
}

console.log(filterOdd(arr)); // [ 1, 3, 5, 7, 9, 11 ]

function filterEven(numbers) {
  const box = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      box.push(numbers[i]);
    }
  }
  return box;
}

console.log(filterEven(arr)); // [ 2, 4, 6, 8, 10 ]

function filterNumbers(numbers, callback) {
  const box = [];

  for (let i = 0; i < numbers.length; i++) {
    if (callback(numbers[i])) {
      box.push(numbers[i]);
    }
  }
  return box;
}

// Callbacks are functions that are passed as arguments to other functions.
const isEven = (currentNumber) => currentNumber % 2 === 0;
const isOdd = (currentNumber) => currentNumber % 2 !== 0;

console.log(filterNumbers(arr, isOdd)); // [ 1, 3, 5, 7, 9, 11 ]
console.log(filterNumbers(arr, isEven)); // [ 2, 4, 6, 8, 10 ]

// With Filter

console.log(arr.filter(isOdd)); // [ 1, 3, 5, 7, 9, 11 ]
console.log(arr.filter(isEven)); // [ 2, 4, 6, 8, 10 ]
