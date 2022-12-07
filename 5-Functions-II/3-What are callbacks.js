// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("John", callMe);

/**
Hi John
I am callback function
*/

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNeg(arr, callback) {
  const box = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      box.push(arr[i]);
    }
  }
  return box;
}

//                arr[i]    arr[i] >= 0
const isPositive = (num) => num >= 0;
const isNegative = (num) => num < 0;

//console.log(removeNeg(myNumbers, isPositive)); // [ 4, 1, 5, 9 ]
//console.log(removeNeg(myNumbers, isNegative)); // [ -20, -7, -6 ]
//console.log(removeNeg(myNumbers, (num) => num >= 0)); // [ 4, 1, 5, 9 ]
