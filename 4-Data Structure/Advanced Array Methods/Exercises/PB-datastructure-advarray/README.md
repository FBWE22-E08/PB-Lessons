# Map, Filter, Reduce

- Work in the `index.js` file provided in this repository.

#### 1. Get Total Amount of Orders

- Use an array method to calculate the total amount of the `orders` array, store the resulting value(sum) in a variable named `totalAmount`.

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
```

#### 2. Increment by 1

- Use an array method to increment each element in the array below by 1. Store the modified array in a variable named `mappedArray`.

```javascript
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
```

#### 3. Filter Evens

- Create a function named `filterEvens` that filters an array of numbers and only returns even numbers. The function should take an array of numbers as an argument and should not use a loop.

- Examples:

```javascript
filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]
```

#### 4. Filter Friends

- Create a function named `filterFriends` which accepts two arguments: an array and a string. It filters the array based on a search string and returns elements that contain the search string.

- Examples

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];
```

#### 5. Sum Up

- Write a function named `sumUp` that uses the reduce method to sum up an array of numbers.

- Examples:

```javascript
sumUp([1, 2, 3, 4, 5]); //returns 15
sumUp([6, 7, 7]); //returns 20
```

#### 6. Square Root

- Write a function named `getSquareRoot` which maps an array of numbers and returns an array with the square root of each element from the passed array.
