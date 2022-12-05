# Spread the Word

- Work from the `index.js` file provided in this repository.

#### 1. Combining Arrays

- Create two arrays: `euroCountries` with strings "Germany" and "France" and `asianCountries` with strings "Japan" and "Korea".
- Add `asianCountries` items to the end of the `euroCountries` array. Now, print `euroCountries` to the console.
- Once again create two arrays. This time `euroCities` with "Berlin" and "Paris" and `asiaCities` with "Tokyo" and "Seoul".
- Save all elements of both arrays to a new array variable named `worldCities` and print it to the console.

#### 2. Copying Arrays

- Copy the array `asiaCities` by using the spread operator. Store the copied array in a new variable and print it to the console.

#### 3. Find the Largest

- Create a function named `findLargestNumber` which accepts an array of numbers as an argument and returns the largest number from the array.

#### 4. Find the Smallest

- Create a function named `findSmallestNumber` which accepts an array of numbers as an argument and returns the smallest number from the array.

#### 5. Clone and Merge

Given two objects:

```javascript
const person = { name: "John" };
const job = { role: "Teacher" };
```

- 5.1 Clone the `person` object and store it in a new variable. Print the variable to the console.
- 5.2 Merge both objects `person` and `job` into a new object named `employee`. Use the spread operator to do so. Now, print `employee` to the console.
- 5.3 Change the value of `role` property in the `job` object to "Plumber". Now print both `job` and `employee` separately to the console.

#### 6. Is the average a whole number?

Create a function named `isWhole` that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

- Examples
- isWhole(1, 2, 3, 4) ➞ false
- isWhole(9, 2, 2, 5) ➞ false

- Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
