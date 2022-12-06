// 1. Get Total Amount of Orders
// Use an array method to calculate the total amount of the orders array, store the resulting value(sum) in a variable named totalAmount.

// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 },
// ];

// const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

// console.log(totalAmount);

// 2. Increment by 1
// Use an array method to increment each element in the array below by 1. Store the modified array in a variable named mappedArray.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const mappedArray = arrayOfNumbers.map((num) => num + 1);

console.log(mappedArray); // [ 4, 46, 7, 57, 8, 10 ]

const users = [
  { name: "John", age: 22 },
  { name: "Joshua", age: 16 },
  { name: "Niamh", age: 21 },
  { name: "Steve", age: 12 },
];

const checkAge = (user) => {
  return user.age > 17;
};

const adultUsers = users.filter((user) => {
  return user.age > 17;
});

console.log(adultUsers);

// 3. Filter Evens
// Create a function named filterEvenNumbers that filters an array of numbers and only returns even numbers. The function should take an array of numbers as an argument and should not use a loop.

const filterEvenNumbers = (arr) => {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
};

console.log(filterEvenNumbers([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvenNumbers([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]
console.log(filterEvenNumbers([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]
console.log(filterEvenNumbers([2221231, 2123, 31123231, 112310, 6, 11231233])); //returns [22,2,110,6]

// 4. Filter Friends
// It filters the array based on a search string and returns elements that contain the search string.

const filterFriends = (arr, str) => {
  return arr.filter((friend) => {
    return friend.includes(str);
  });
};

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterFriends(friends, "ka")); // ["Rika"];
console.log(filterFriends(friends, "enn")); // ["Jenna", "Bleda", "Oliver"];
