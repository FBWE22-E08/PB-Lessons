// Filter array method
// Creates a new array
// Does not change the original array
// The callback function that we pass to the filter method should always return true or false
// If the callback function returns true, the element will be added to the new array
// If the callback function returns false, the element will NOT be added to the new array

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [ 2, 4 ]

const ages = [11, 111, 21, 13, 998];

const adults = ages.filter((age) => age >= 18);

console.log(adults); // [ 111, 21, 998 ]

const minors = ages.filter((age) => age < 18);

console.log(minors); // [ 11, 13 ]

const words = [
  "clean",
  "exit",
  "waiting",
  "for",
  "changes",
  "before",
  "restart",
];

// We want to filter out / create a new array with only the strings which are at least 6 character long
const newWords = words.filter((str) => str.length > 5);

console.log(newWords); // [ 'waiting', 'changes', 'before', 'restart' ]
