// 1 Return an array with all the words in the given array that are exactly four letters long.
// Examples:

const isFourLetters = (strings) => {
  const result = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length === 4) {
      result.push(strings[i]);
    }
  }

  return result;
};

// console.log(isFourLetters(["John", "James", "Jack", "Jeanne"])); // ➞ ["John", "Jack"]
// console.log(isFourLetters(["Tomato", "Corn", "Lettuce"])); // ➞ ["Corn"]
// console.log(isFourLetters(["Dog", "Cat", "Deer"])); // ➞ ["Deer"]

// 2. Create a function named getMonthName that takes a number between 1 and 12, and returns its corresponding month name as a string.

const getMonthName = (number) => {
  if (number < 1 || number > 12) {
    return "Invalid number";
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[number - 1];
};

// console.log(getMonthName(1)); // January

// 3. Create a function named unique that takes an array of numbers and returns the unique numbers.

const unique = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result;
};

// Examples:
// console.log(unique(["john", "steve", "steve"])); // ➞ ['john']
// console.log(unique(["john", "steve", "steve", "mary"])); // ➞ ['john', 'mary']
// console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ [7]
// console.log(unique([0, 0, 0.77, 0, 0, 5])); // [0.77, 5]
// console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // [0]

// 4. Create a function named code that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// PS: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

const code = (string) => {
  const characters = string.split("");

  const hackLetters = ["a", "e", "i", "o", "s"];
  const replacemenetLetters = ["4", "3", "1", "0", "5"];

  for (let i = 0; i < characters.length; i++) {
    const index = hackLetters.indexOf(characters[i]);
    // If I have to replace the character
    if (index !== -1) {
      characters[i] = replacemenetLetters[index];
    }
  }

  return characters.join("");
};

// Examples:
console.log(code("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
console.log(code("programming is fun")); // ➞ "pr0gr4mm1ng 15 fun"
console.log(code("become a coder")); //➞ "b3c0m3 4 c0d3r"
