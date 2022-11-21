// 1. Write a function named triplet that takes in one parameter and logs that parameter 3 times into the console. For the input "Cat" it would log "CatCatCat"

// 1. create a function called triplet
// 2. function takes one parameter
// whatever the parameter is, it should be printed 3 times

const triplet = (string) => {
  // 1st way
  console.log(string + string + string);

  //   2nd way
  console.log(`${string}${string}${string}`);

  //   3rd way - with a loop
  //    1. iteration
  //    result = ''
  //    string = 'dog'
  //    i = 0
  //    ''      ''          dog
  //    result = result + string
  //    result = 'dog'

  //    2. iteration
  //    result = 'dog'
  //    string = 'dog'
  //    i = 1
  //    'dog'     'dog' + 'dog'
  //    result = result + string
  //    result = 'dogdog'

  //    3. iteration
  //    result = 'dogdog'
  //    string = 'dog'
  //    i = 2
  //    'dogdog' 'dogdog' + 'dog'
  //    result = result + string
  //    result = 'dogdogdog'
  let result = "";

  for (let i = 0; i < 3; i++) {
    // These two are the same
    // result = result + string;
    result += string;
  }

  console.log(result);

  // 4. way - using the repeat method
  console.log(string.repeat(3));
};

triplet("dog"); // dogdogdog
console.log("task 1");

// 2. Write a function named quintuplet that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

// Same as number two, we just use 5 instead of 3.
/*

    Same as task 1, the only difference is tha twe are using number 5 instead of 3.

*/
const quintuplet = (string) => {
  // 1. way
  console.log(string + string + string + string + string);

  // 2. way
  console.log(`${string}${string}${string}${string}${string}`);

  // 3. way with a loop
  let result = "";

  for (let i = 0; i < 5; i++) {
    result += string;
  }
  console.log(result);

  //   4. way - using the repeat method
  console.log(string.repeat(5));
};
console.log("task 2");

quintuplet("cat");

// 3. Write a function named multiStr that takes in two parameters, the first one should be a number and the 2nd one should be a string. The function returns the 2nd argument repeated as many times as the 1st argument defines. For the inputs 3 and Woah it should return WoahWoahWoah

const multiStr = (amount, string) => {
  // Two parameters
  // first parameter how many times to repeat the string
  // second parameter, which string
  let result = "";
  for (let i = 0; i < amount; i++) {
    result += string;
  }

  console.log(result);

  console.log(string.repeat(amount));
};

console.log("task 3:");
multiStr(2, "dog"); // 'dogdog'
multiStr(1, "hat"); // 'hathathat'
multiStr(4, "up"); // 'upupupup'

// 4. Write a function named largestNumInArray that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input [1,6,83,91,0,-4,1337,5] it should return 1337

const largestNumInArray = (numbers) => {
  //   create a variable with initial value as null
  let highestNum = null;

  //   use a for loop
  //   iterate over the whole array
  for (let i = 0; i < numbers.length; i++) {
    //   every time I iterate, compare the current number with the highestNum
    //   if the current number is higher than the highestNum
    // set highestNum to the currentNumber
    if (highestNum < numbers[i]) {
      highestNum = numbers[i];
    }
  }
  console.log(highestNum);
};

console.log("task 4:");
largestNumInArray([1, 2, 3]);
largestNumInArray([10, 234, 3123213, 2]);

// This question has 2 parts

// Part a) write a function named printIfDivisibleByTen that takes in a number and prints a "Even 10!" to the console if the number is evenly divisible by 10. Examples:

const printIfDivisibleByTen = (num) => {
  if (num % 10 === 0) {
    console.log("Even 10!");
  }
};

const isNumberDivisibleByTen = (num) => num % 10 === 0;
// Longer version
// const isNumberDivisibleByTen = (num) => {
//   if (num % 10 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const exampleOne = isNumberDivisibleByTen(20); // true
console.log("exampleOne:", exampleOne);

console.log("task 5:");
console.log(isNumberDivisibleByTen(11));
// printIfDivisibleByTen(1);
// printIfDivisibleByTen(2);
// printIfDivisibleByTen(32);
// printIfDivisibleByTen(10);
// printIfDivisibleByTen(30);
// printIfDivisibleByTen(90000);

// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.
for (let i = 0; i < 125; i++) {
  printIfDivisibleByTen(i);
}

// 6. Write an arrow function named largestNum that takes in 5 numbers as its parameters and returns the largest one

const largestNum = (a, b, c, d, e) => {
  return Math.max(a, b, c, d, e);
};

console.log("task 6:");
const result = largestNum(2, 5, 1, 32, 4); // 32
console.log("result:", result);

// 7. Write an arrow function named isString that takes in one parameter and returns true if that parameter is a string.

const isString = (str) => {
  if (typeof str === "string") {
    return true;
  }
};

console.log(isString("hi")); // true
console.log(isString(2)); // undefined

// Shorter version of the same solution
const shorterIsString = (str) => typeof str === "string";

console.log("task 7:");
console.log(shorterIsString("hello")); // true
console.log(shorterIsString(2)); // false

// 8. Write an arrow function named areStrings that takes in two parameters and returns true if both of them are strings.

const areStrings = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return true;
  }
};

// Shorter version
// const areStrings = (a, b) => typeof a === "string" && typeof b === "string";
console.log("task 8:");
console.log(areStrings("yes", "no")); // true
console.log(areStrings(2, "no")); // undefined
console.log(areStrings("yes", 2)); // undefined
console.log(areStrings(2, 2)); // undefined

//  9.The function should return the first word in the string. Examples:

// 'hi there from here'
const getFirstWord = (str) => {
  // ['hi', 'there', 'from', 'here']
  const words = str.split(" ");

  return words[0];
};

const shorterGetFirstWord = (str) => str.split(" ")[0];

console.log("task 9");
console.log(getFirstWord("hi there from here")); // 'hi'

// 10. The function should return a new string where each word in the input string is repeated by the number of words in the input string.

// Examples:
// wordRepeater("bunny") --> "bunny"
// wordRepeater("Cat food") --> "Cat Cat food food"
// wordRepeater("I am groot") --> "I I I am am am groot groot groot"
// wordRepeater("O M G ?") --> "O O O O M M M M G G G G ? ? ? ?"

const wordRepeater = (str) => {
  const words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      result = result + words[i] + " ";
    }
  }
  return result.trim();
};

console.log("task 10");
// console.log(wordRepeater("hi bye")); // hi hi bye bye
console.log(wordRepeater("hi bye ciao")); // hi hi hi bye bye bye ciao ciao ciao
