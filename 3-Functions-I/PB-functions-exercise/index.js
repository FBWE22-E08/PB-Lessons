// **1. Add Up.**
// Create a function named `sumIntFrom1ToN` that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Integer - whole numbers, numbers without decimal points (1, 2, 3)
const sumIntFrom1ToN = (int) => {
  let result = 0;
  for (let i = 1; i <= int; i++) {
    result += i;
  }

  return result;
};

console.log(sumIntFrom1ToN(4)); // 10

// **2. Cubed.**
// Create a function named `sumOfCubes` that takes in three numbers and returns the sum of its cubes.
const sumOfCubes = (a = 0, b = 0, c = 0) => a ** 3 + b ** 3 + c ** 3;
// const sumOfCubes = (a = 0, b = 0, c = 0) => {
//   return a ** 3 + b ** 3 + c ** 3;
// };

console.log(Math.exp());

console.log(sumOfCubes(1, 5, 9)); // 855
console.log(sumOfCubes(2)); // 8
console.log(sumOfCubes()); // 0

// **3. String Check.**
// Create a function named `isStrStartOfWord` that takes 2 strings as parameters, where the second string is a word and returns `true` or `false` depending on whether the word starts with the string passed as the first parameter.

// Examples:

// - `isStrStartOfWord("bu", "button")` ➞ true
// - `isStrStartOfWord("tri", "triplet")` ➞ true
// - `isStrStartOfWord("beau", "pastry")` ➞ false

// const isStrStartOfWord = (string, word) => word.startsWith(string);
const isStrStartOfWordLonger = (string, word) => {
  const result = word.startsWith(string);
  return result;
};

const isStrStartOfWord = (str, word) => {
  const strLength = str.length;
  const beginningOfWord = word.substring(0, strLength);

  return str.toUpperCase() === beginningOfWord.toUpperCase();
};

console.log(isStrStartOfWord("BUT", "button")); // true
console.log(isStrStartOfWord("bust", "button")); // false

// **4. Less Than or Equal to Zero?**
// Create a function named `isLEQZero` that takes a number as its only argument and returns `true` if it's less than or equal to zero, otherwise return `false`.

// const isLEQZero = (num) => {
//   if (num <= 0) {
//     return true;
//   }
//   return false;
// };

// const isLEQZero = (num) => {
//   return num <= 0;
// };

const isLEQZero = (num) => num <= 0;

console.log(isLEQZero(5));
console.log(isLEQZero(-5));

// **5. Count Occurrences.**
// Create a function named `countOccurrences` that accepts two arguments: a string and a letter. The function should return the number of occurrences of that letter in the string.
const countOccurrences = (string, character) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }

  return count;
};

console.log(countOccurrences("hello", "l")); // 2
console.log(countOccurrences("good bye", "o")); // 2

// **6. X To The Power of X.**
// Create a function named `calcBaseToExponent` that takes a base number and an exponent number as parameters and returns the result. **NB:** All test inputs will be positive integers.

// const calcBaseToExponent = (base, exponent) => {
//   return base ** exponent;
// };

const calcBaseToExponent = (base, exponent) => base ** exponent;

const calcBaseToExponentUsingMath = (base, exponent) => {
  return Math.pow(base, exponent);
};

// const calcBaseToExponent = (base, exponent) => Math.pow(base, exponent);

// **7. Dog Years.**
// Create a function named `dogAge` which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the assumtion that 1 human year = 7 dog years. The function should return a string like in the example below.

const dogAge = (age) => {
  const dogsAge = age * 7;
  return `Your doggo is ${dogsAge} years old in dog years!`;
};

console.log(dogAge(15));
console.log(dogAge(10));

//  **8. A Lifetime Supply...**
// The function should accept two arguments: current age and amount per day.
// The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100. The function should return a string like in the example below.

const calcLifetimeSupply = (age, amountPerDay) => {
  const MAX_AGE = 100;
  // 1. How many years I have left
  // 2. Transform years left into days
  // 3. Multiply days left with amount per day
  const yearsLeft = MAX_AGE - age; // 80
  const daysLeft = yearsLeft * 365;
  const result = daysLeft * amountPerDay;
  return `The snack company should provide you with ${result} units, until you are a ripe old age of ${MAX_AGE}. Happy snacking!`;
};

console.log(calcLifetimeSupply(20, 2));

// **Bonus:**

const calcLifetimeSupplyBonus = (age, amountPerDay, maxAge) => {
  const yearsLeft = maxAge - age; // 80
  const daysLeft = yearsLeft * 365;
  const result = Math.round(daysLeft * amountPerDay);

  return `The snack company should provide you with ${result} units, until you are a ripe old age of ${maxAge}. Happy snacking!`;
};

console.log(calcLifetimeSupplyBonus(40, 1, 41));

// Math.ceil 1.1 = > 2
// Math.floor 1.9 => 1
// Math.round 1.5 => 2, 1.4 => 1

// **9. Where's Waldo?**
// Create a function named `isWaldoHere` that takes a string and returns `true` if Waldo is found, and `false` if he's not.

// Examples:

// - `isWaldoHere("is there a wal here?")` ➞ false
// - `isWaldoHere("I found you Waldo!")` ➞ true
// - `isWaldoHere("Wait, don't you mean Wally?")` ➞ false
// - `isWaldoHere("waldo is here")` ➞ true

const isWaldoHere = (str) => {
  if (str.toLowerCase().includes("waldo")) {
    return true;
  }
  return false;
};

const isWaldoHereShort = (str) => str.toLowerCase().includes("waldo");

console.log(isWaldoHere("WALDO"));
console.log(isWaldoHereShort("WALDO"));
