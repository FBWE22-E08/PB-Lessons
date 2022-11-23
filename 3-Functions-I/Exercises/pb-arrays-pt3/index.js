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

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return months[number];
};

console.log(getMonthName(11)); // January

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
  debugger;
  //   Split the string parameter into an array of characters/letters
  const characters = string.split(""); // ["j", "4", "v", "4", "5", "c", "r", "1", "p", "t"];

  //   Characters which need to be replaced if they exist in our string
  const hackLetters = ["a", "e", "i", "o", "s"];

  //   Characters with which we need to replace the hackLetters
  const replacemenetLetters = ["4", "3", "1", "0", "5"];

  for (let i = 0; i < characters.length; i++) {
    // Checking if the current character is one of hackLetters
    const index = hackLetters.indexOf(characters[i]);
    // If our character is one of the hackLetters
    if (index !== -1) {
      // Replace that character with the correct replacement
      characters[i] = replacemenetLetters[index];
    }
  }

  //   Join our array of characters into a string again
  return characters.join(""); // j4v45cr1pt
};
// Examples:
console.log(code("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
console.log(code("programming is fun")); // ➞ "pr0gr4mm1ng 15 fun"
console.log(code("become a coder")); //➞ "b3c0m3 4 c0d3r"
