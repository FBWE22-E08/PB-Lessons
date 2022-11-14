//  Scope
const userName = "John";

if (4 > 2) {
  // We can access username from the inner scope
  //   console.log(userName);
  const x = "2";
}

// We cannot access x from the outher spoce
// console.log(x); // Error

const food = "margharita";

// else if statement
// if (food === "pizza") {
//   console.log("Here is your pizza");
// } else if (food === "cheeseburger") {
//   console.log("Here is your cheeseburger");
// } else if (food === "fries") {
//   console.log("Here are your fries");
// } else {
//   console.log("We do not serve that food");
// }

// Switch statements
//  the value that we are testing
switch (food) {
  // food === 'pizza'
  // food === 'mista'
  // food === 'margharita'
  case "pizza":
  case "mista":
  case "margharita":
    console.log("Here is your pizza");
    break;
  // food === 'cheeseburger'
  case "cheeseburger":
    console.log("Here is your cheeseburger");
    break;
  // food === 'fries'
  case "fries":
    console.log("Here are your fries");
    break;

  default:
    console.log("We do not serve that food");
}

const result = 8;
// 1 - 3 points, fail the exam
// 4 - 5, passed the exam
// 5- 7, excellent
switch (result) {
  // result === 1
  // result === 1
  // result === 3
  case 1:
  case 2:
  case 3:
    console.log("You failed the exam");
    break;
  // result === 4
  // result === 5
  case 4:
  case 5:
    console.log("You passed the exam");
    break;
  // result === 6
  // result === 7
  case 6:
  case 7:
    console.log("You did excellent");
    break;
  // result is not a number between 1 and 7
  default:
    console.log("Unknown grade");
}
