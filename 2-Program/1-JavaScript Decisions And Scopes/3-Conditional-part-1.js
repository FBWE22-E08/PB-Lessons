/*if (value) {
  // value is truthy
} else {
  // value is falsy
  // it could be false, 0, '', null, undefined or NaN
}*/

const theme = "light";

console.log(theme == "dark"); // true OR false

if (theme == "dark") {
  // value is truthy
  console.log("Show dark theme 🌒");
} else {
  // value is falsy
  console.log("Show light theme 💡");
}

console.log("################################################");

//const theNumber = 2;

const theNumber = "DCI";

console.log("Number.isNaN(theNumber) => ", !isNaN(theNumber)); // false

if (!isNaN(theNumber)) {
  // true
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  // false
  console.log("Your number is not a number ");
}

console.log("################################################");

const water = "no";

console.log('water == "yes" ==> ', water == "yes"); // false

// first way
if (water == "yes") {
  console.log("Take the water!");
} else {
  console.log("Take the coffe!");
}

// 2nd way
water == "yes"
  ? console.log("Take the water!") // true
  : console.log("Take the coffe!"); //  false

console.log("################################################");

const myNumber = 9;
//              8  % ( 8 - 2 = 6 - 2 = 4 - 2 = 2 - 2 = 0)
console.log(myNumber % 2); // 1
console.log(myNumber % 2 == 0); // false

//const myNumber_2 = 9;

//              9  % ( 9 - 2 = 7 - 2 = 5 - 2 = 3 - 2 = 1)

//console.log(myNumber_2 % 2); //1

if (myNumber % 2 == 0) {
  console.log("the number is even!");
} else {
  console.log("The number is odd");
}
