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

// triplet("dog"); // dogdogdog

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

largestNumInArray([1, 2, 3]);
largestNumInArray([10, 234, 3123213, 2]);
