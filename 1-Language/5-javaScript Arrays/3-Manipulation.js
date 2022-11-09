// Manipulation Methods

// concat

const arr = [1, 2];

console.log(arr.concat(2, 5, 7)); // [ 1, 2, 2, 5, 7 ]

const colors_1 = ["red", "blue"];

const colors_2 = ["yellow", "green"];

console.log("colors_1 + colors_2 => ", colors_1.concat(colors_2));
// [ 'red', 'blue', 'yellow', 'green' ]

console.log("#############################");
// splice

// index       0      1        2
const text = ["I", "study", "JavaScript"];

console.log("text => ", text); // [ 'I', 'study', 'JavaScript' ]

//      start, deleteCount
text.splice(1, 2);

console.log("text => ", text); // [ 'I']

//            0       1       2             3       4
let text_2 = ["I", "study", "JavaScript", "right", "now"];

console.log("text_2 => ", text_2); // [ 'I', 'study', 'JavaScript', 'right', 'now' ]

// .       start, deleteCount, ... replace
text_2.splice(0, 3, "Let's", "dance");

console.log("text_2 => ", text_2); //  [ "Let's", 'dance', 'right', 'now' ]

//                0       1       2
const students = ["Max", "Tommy", "Alex"];

console.log("students ==> ", students);

students.splice(1, 0, 88, "Pilar");

console.log("students ==> ", students); // [ 'Max', 88, 'Pilar', 'Tommy', 'Alex' ]
