/* const condition = 30 > 25;
console.log(condition);
console.log(Boolean(condition));

// Boolean(condition)
if (condition) {
  // statement 1
  // if condition is true
  // value is truthy
  console.log("i is greater than 25");
} else {
  // statement 2
  // if condition is false
  // value is falsy
  // it could be false, 0, '', null, undefined or NaN
  console.log("i is less than 25");
}*/

const num = 105;

if (num < 10) {
  // true => if num < 10
  console.log("Small");
} else if (num < 100) {
  // true => if num < 100
  console.log("Medium");
} else {
  // else
  console.log("Large");
}
