// If we write a function without a return statement, the function will automatically return undefined
let name = "";

function doNothing() {
  name = "John";
  // return undefined
}
console.log(doNothing() === undefined);

// If we just return, our function will also return undefined
function doNothingTwo() {
  return;
  //   Code below the return statement will not execute
  console.log("hi, I will never be executed");
}

console.log(doNothingTwo() === undefined);

function sum(a, b) {
  return a + b;
}

const numOne = 4; // 4
const numTwo = 2 + 2; // 4
const numThree = sum(2, 2); // 4

console.log(numOne === numTwo);
console.log(numTwo === numThree);
console.log(numOne === numThree);

// If a person is over 18, return true, otherwise return false
function checkAge(age) {
  if (age < 18) {
    return false;
  }
  return true;
}

// True or false, based on the parameter that is passed
const isAdult = checkAge(122); // true
const isAdultTwo = checkAge(12); // false

// Accepts age and drink parameters. If the age is over 18, we want to return the drink.
// If the age is below 18, we want to return null

function serveDrink(age, drink) {
  const isAdult = checkAge(age); // true or false

  if (!isAdult) {
    return null;
  }
  return drink;
}

const firstOrder = serveDrink(21, "wine"); // 'wine'
// const firstOrder = 'wine'
const secondOrder = serveDrink(11, "wine"); // null

console.log(firstOrder); // wine
console.log(secondOrder); // null

// create an array with 4 names in it, John, Mary, Steve and Franco
// create a function which will accept a string parameter.
// if our users array contains the string parameter, return true
// otherwise, if our users array does not have the string, return false

function checkUser(name) {
  const users = ["John", "Mary", "Steve", "Franco"];

  for (let i = 0; i < users.length; i++) {
    if (users[i].toUpperCase() === name.toUpperCase()) {
      return true;
    }
  }

  return false;
}
console.log(checkUser("franco")); // true
console.log(checkUser("JOHn")); // true
console.log(checkUser("MaRY")); // true
console.log(checkUser("Joshua")); // false
