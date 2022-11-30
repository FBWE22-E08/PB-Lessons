// Rest operator

const sum = (...params) => {
  console.log(params);
};

sum(1, 2, 3, 4, 5, 6, "sds", { name: "john" });

console.log(Math.max(2, 21, 11)); // 21

const numbers = [2, 21, 11];

console.log(Math.max(numbers)); // NaN

// Spread syntax to the rescue
console.log(Math.max(...numbers)); // 21

let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

// We can spread multiple arrays/iterables (arrays, strings and objects)
console.log(Math.max(...firstArr, ...secondArr)); // 6

// We can combine arrays with normal values
console.log(Math.max(1, 42, ...firstArr, 232, ...secondArr, 1212)); // 1212

firstArr = ["Hi", "John"];
secondArr = ["Bye", "Delilah"];

let thirdArr = [...firstArr, ...secondArr];
console.log(thirdArr);

thirdArr = [...secondArr, ...firstArr];
console.log(thirdArr);

thirdArr = [
  "this is my first text",
  ...firstArr,
  "this is in the middle",
  ...secondArr,
  "this string comes at the end",
];
console.log(thirdArr);

// We can spread strings as well
const name = "John";

// Spread a string into an array
console.log([...name]); // [ 'J', 'o', 'h', 'n' ]

// Spread a string into an object
console.log({ ...name }); // { '0': 'J', '1': 'o', '2': 'h', '3': 'n' }

// Merging objects with the spread syntax
const userName = { first: "John", last: "Doe" };
const userAddress = { city: "Berlin", country: "Germany" };

const user = {
  ...userName,
  ...userAddress,
};

console.log(user); // { first: 'John', last: 'Doe', city: 'Berlin', country: 'Germany' }

// Shallow cloning vs deep cloning of arrays/objects

let x = 5;

let y = x;

x = 7;

console.log(y); // 5

// Normal copy
const array = [1, 2, 3];
// Copying the array
let arrayCopy = array;

console.log(arrayCopy);

arrayCopy[0] = 452;

console.log(arrayCopy); // [ 452, 2, 3 ]
// Our original array did get affected by the changes we did to the copy
console.log(array); // [ 452, 2, 3 ]

// Shallow copy with the spread syntax
arrayCopy = [...array];

console.log(arrayCopy);
console.log(array);

arrayCopy[0] = 627;

console.log(arrayCopy); // [ 627, 2, 3 ]
// Our original array did not get affected by the changes we did to the copy
console.log(array); // [ 452, 2, 3 ]

////////////////////////
let nestedArray = [1, [2], 3];
let copyNestedArr = [...nestedArray];

copyNestedArr[0] = 10;
copyNestedArr[1][0] = 578;

console.log("original nested array:", nestedArray);
console.log("copy of nested arr:", copyNestedArr);

// Recursively build copies
const createDeepCopy = (input) => {
  if (typeof input !== "object") {
    return input;
  }

  let copy = Array.isArray(input) ? [] : {};
  for (let key in input) {
    const value = input[key];
    copy[key] = createDeepCopy(value);
  }

  return copy;
};

nestedArray = [1, [2], 3];
copyNestedArr = createDeepCopy(nestedArray);

copyNestedArr[0] = 10;
copyNestedArr[1][0] = 578;

console.log("original nested array:", nestedArray);
console.log("copy of nested arr:", copyNestedArr);
