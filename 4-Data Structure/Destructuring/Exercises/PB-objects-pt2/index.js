// // 1. Check if a number is within a given range.

// const isWithinRange = (num, range) => {
//   if (num >= range.min && num <= range.max) {
//     return true;
//   }

//   return false;
// };

// const isWithinRangeShorter = (num, range) =>
//   num >= range.min && num <= range.max;

// console.log(isWithinRangeShorter(4, { min: 0, max: 5 })); // true
// console.log(isWithinRangeShorter(4, { min: 4, max: 5 })); // true
// console.log(isWithinRangeShorter(4, { min: 6, max: 10 })); // false
// console.log(isWithinRangeShorter(5, { min: 5, max: 5 })); // true

// // 2. Scrabble.
// // Create a function named calcMaxScrabbleScore that given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.

// // Here the player's maximum score would be 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

// const calcMaxScrabbleScore = (tiles) => {
//   let sum = 0;

//   for (const tile of tiles) {
//     sum += tile.score;
//   }

//   return sum;
// };

// const scrabbleHand = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 },
// ];
// console.log(calcMaxScrabbleScore(scrabbleHand)); // ➞ 28

// // 3. Is it an empty object?
// // Create a function isEmptyObject that returns true if an object is empty, and false if otherwise.

// const isEmptyObject = (obj) => {
//   return Object.keys(obj).length === 0;
// };
// //                                   It is empty if the length is equal to zero
// const isEmptyObjectShorter = (obj) => Object.keys(obj).length === 0;

// // Is the object empty?
// //                        It is empty it if doesn't have length
// const isEmptyObjectShortest = (obj) => !Object.keys(obj).length;

// console.log(isEmptyObjectShortest({})); // ➞ true
// console.log(isEmptyObjectShortest({ a: 1 })); // ➞ false

// 4. Counting Letters.

const countLetters = (str) => {
  const letterCount = {};

  for (const letter of str) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

console.log(countLetters("tree")); // ➞ {t: 1, r: 1, e: 2}

// 5. Free Shipping.
const freeShipping = (obj) => {
  const values = Object.values(obj);

  let sum = 0;
  for (const val of values) {
    sum += val;
  }

  return sum > 50;
};

console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 })); // ➞ false
console.log(freeShipping({ "Surround Sound Equipment": 499.99 })); // ➞ true
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
); // ➞ false

// 6. Programming Object

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes",
};

programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming["isFun"] = true;

for (const language of programming.languages) {
  console.log(language);
}

// Using a loop, console.log all of the keys in the programming object.
// Group all the keys into an array
const keys = Object.keys(programming);
// We loop over the keys
for (let key of keys) {
  console.log(key);
}

// Second way
console.log("/**************************************");
for (let key in programming) {
  console.log(key);
}

// Using a loop, console.log all of the values in the programming object.
// 1st way
const values = Object.values(programming);
console.log(values);

for (const value of values) {
  console.log(value);
}

// 2nd way
for (const key in programming) {
  console.log(programming[key]);
}

programming.worthwhile = function () {
  if (this.isChallenging && this.isRewarding) {
    return `Learning the programming languages: ${this.languages.join(
      ", "
    )} is rewarding and challenging`;
  }

  return false;
};

console.log(programming.worthwhile());

console.log(programming.worthwhile);
console.log(programming.isRewarding);

console.log(programming);

programming.snow = "purple";

console.log(programming);

Object.freeze(programming);

programming.sun = "green";

console.log(programming);
