// Arrays

// Non primitive data structure

// Lists of items

const name = ["John", "Steve"];

// Arrays have length
// Length tells us how many items there are in an array

// Create a function called reverseItemsInArray
// The function accepts an array of numbers as a parameter
// If the list is empty, return 'No numbers to reverse'
// Otherwise, return an array with all the numbers reversed

/**
 *
 * @param {Array<number>} numbers
 */
const reverseItemsInArray = (numbers) => {
  if (numbers.length === 0) {
    return "No values to reverse";
  }

  //   1st solution
  //   return numbers.reverse();

  //   2nd solution - start the loop from the end of the array
  //   Add items from the end of the array into our reuslt array
  const result = [];

  //   for (let i = numbers.length - 1; i >= 0; i--) {
  //     result.push(numbers[i]);
  //   }

  // 3rd solution - start the loop from the beginning of the array
  // Add items to the beginning of my array

  // numbers = [5, 2, 7, 4]
  // result = [4, 7, 2, 5]

  for (let i = 0; i < numbers.length; i++) {
    result.unshift(numbers[i]);
  }

  console.log(result);
};

console.log(reverseItemsInArray([])); // 'No numbers to reverse'
console.log(reverseItemsInArray([1, 2, 3, "str"])); // ['str', 3, 2, 1]

const incrementByTen = (numbers) => {
  let x = 20;
  x = x + 10; // 30

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + 10;
  }

  return numbers;
};
