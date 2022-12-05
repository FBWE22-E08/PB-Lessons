// 1. Combining Arrays

let euroCountries = ["Germany", "France"];
const asianCountries = ["Japan", "Korea"];

euroCountries = [...euroCountries, ...asianCountries]; // [ 'Germany', 'France', 'Japan', 'Korea' ]

// This could also work:
// euroCountries.push(...asianCountries)

// This is incorrect:
// euroCountries.push(asianCountries)

console.log(euroCountries);

const euroCities = ["Berlin", "Paris"];
const asiaCities = ["Tokyio", "Seoul"];
const worldCities = [...euroCities, ...asiaCities];

console.log(worldCities); // [ 'Berlin', 'Paris', 'Tokyio', 'Seoul' ]

// 2. Copying Arrays
const asianCitiesCopy = [...asiaCities];

console.log(asianCitiesCopy); // [ 'Tokyio', 'Seoul' ]

// 3. Find the Largest
const findLargestNumber = (arr) => {
  return Math.max(...arr);
};

const findLargestNumberShorter = (arr) => Math.max(...arr);

console.log(findLargestNumber([1, 2, 3, 121, 5])); // 121

// 4. Find the Smallest

const findSmallestNumber = (arr) => {
  return Math.min(...arr);
};

const findSmallestNumberShorter = (arr) => Math.min(...arr);

console.log(findSmallestNumber([1, 23, 0, 11])); // 0

// 5. Clone and Merge
// Given two objects:

// 5.3 Change the value of role property in the job object to "Plumber". Now print both job and employee separately to the console.

const person = { name: "John" };
const job = { role: "Teacher" };

const personCopy = { ...person };
console.log(personCopy); // { name: 'John' }

const employee = { ...person, ...job };
console.log(employee); // { name: 'John', role: 'Teacher' }

job.role = "Plumber";

console.log("job:", job); // job: { role: 'Plumber' }
console.log("employee", employee); // employee { name: 'John', role: 'Teacher' }

// 6. Is the average a whole number?

// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

const isWhole = (int1, int2, int3, int4) => {
  return Number.isInteger((int1 + int2 + int3 + int4) / 4);
};

console.log(isWhole(1, 2, 3, 4)); // ➞ false
console.log(isWhole(9, 2, 2, 5)); // ➞ false

const arr = [2, 2, 2, 2];

console.log(isWhole(...arr)); // true
