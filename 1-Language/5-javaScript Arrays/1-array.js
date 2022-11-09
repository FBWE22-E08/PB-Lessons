//const car1 = "Saab";
//const car2 = "Volvo";
//const car3 = "BMW";

// length => starts from 1
// index => starts from 0

const cars = ["Saab", "Volvo", "BMW", "Ford"];
const arr = [1, 2, 3];
const names = ["Jo"];
const users = [];
const mixArray = ["A", 33, true, null, undefined, "test", "Alex"];

console.log("################# Arrays #############################");

console.log("cars => ", cars); // [ 'Saab', 'Volvo', 'BMW','Ford' ]
console.log("arr => ", arr); //  [ 1, 2, 3 ]
console.log("mixArray ==> ", mixArray); // [ 'A', 33, true, null, undefined, 'test', 'Alex' ]

console.log("################# Array Length #############################");

console.log("cars.length ==> ", cars.length); // 4
console.log("names.length ==> ", names.length); // 1
console.log("users.length ==> ", users.length); // 0
console.log("mixArray.length ==> ", mixArray.length); // 7

console.log(
  "##################### Accessing Array Elements (GET) #########################"
);

// Index            0       1        2
const students = ["Alex", "Tommy", "Pilar"];

console.log("students[1] => ", students[1]); // Tommy

// .                           Tommy
console.log("students[1][1] => ", students[1][1]); // o
console.log("students[1].substring(1, 2) => ", students[1].substring(1, 2)); // o

console.log("students[2] => ", students[2]); // Pilar
console.log("students[2] => ", students[2][4]); // r
console.log("students[4] => ", students[4]); //  undefined
console.log("students[4] => ", students[3]); // undefined
console.log("students.length ==> ", students.length - 1); //  3

// first way to target the last item in array
console.log("students last item => ", students[students.length - 1]); // Pilar
console.log("students[students.length - 2] => ", students[students.length - 2]); // Tommy

// 2nd way to target the last item in array
console.log(students.at(-1)); // Pilar
console.log(students.at(-2)); // Tommy

console.log(
  "##################### Changing an Array Element (SET) #########################"
);

// INDEX         0        1       2
const colors = ["red", "blue", "yellow"];

console.log(colors[1]); // blue

colors[1] = "green";
colors[2] = "pink";

//colors = "test"; // TypeError: Assignment to constant variable.

console.log("colors => ", colors); // [ 'red', 'green', 'pink' ]

// const with string
// const myName = "Alex";
// myName = "Jo"; // TypeError: Assignment to constant variable.
// let with string
//let myName = "Alex";
//myName = "Jo"; // TypeError: Assignment to constant variable.
