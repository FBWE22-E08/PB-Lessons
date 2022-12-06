// Sort method - it will not create a new array, it will manipulate the array in place
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

days.sort();

console.log(days); // [ 'Friday', 'Monday', 'Thursday', 'Tuesday', 'Wednesday' ]

const numbers = [1, 30, 4, 21, 10000];

// If we do not pass a sorting callback function,
// Javascript will convert our values to strings and sort them as strings
numbers.sort();

console.log(numbers); // [ 1, 10000, 21, 30, 4 ] = !!! notice that it is sorted incorrectly

// Sorting in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // [ 1, 4, 21, 30, 10000 ]

// Sorting in descending order
numbers.sort((a, b) => b - a);

console.log(numbers); // [ 10000, 30, 21, 4, 1 ]

const users = [
  { name: "John", age: 22 },
  { name: "Steve", age: 48 },
  { name: "Kurt", age: 4 },
  { name: "Maria", age: 67 },
];

// Sorting by age
users.sort((a, b) => {
  return a.age - b.age;
});

console.log("sort by age:", users);

// Sort an array of objects by name
users.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name) {
    return 1;
  }

  return 0;
});

console.log("sorted by name", users);
