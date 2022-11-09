// Array methods ==>  Add/remove items

const schoolClass = [];

console.log("schoolClass => ", schoolClass); // []

// push and pop
schoolClass.push("Tommy");

console.log("schoolClass => ", schoolClass); //  [ 'Tommy' ]

schoolClass.push("Max", "Jo");

console.log("schoolClass => ", schoolClass); //  [ 'Tommy', 'Max', 'Jo' ]

schoolClass.pop();

console.log("schoolClass => ", schoolClass); // [ 'Tommy', 'Max' ]

schoolClass.pop();

console.log("schoolClass => ", schoolClass); // [ 'Tommy' ]

schoolClass.pop();

console.log("schoolClass => ", schoolClass); // []

console.log("####################################################");

// shift and unshift

const array_2 = ["ABC", 100, "Max"];

console.log("arryy_2 => ", array_2); // [ 'ABC', 100, 'Max' ]
console.log("arryy_2.length => ", array_2.length); // 3

array_2.shift();

console.log("arryy_2 => ", array_2); // [ 100, 'Max' ]
console.log("arryy_2.length => ", array_2.length); // 2

array_2.shift();

console.log("arryy_2 => ", array_2); // [  'Max' ]
console.log("arryy_2.length => ", array_2.length); // 1

array_2.unshift("test");

console.log("arryy_2 => ", array_2); //  [ 'test', 'Max' ]
console.log("arryy_2.length => ", array_2.length); // 2

array_2.unshift(7777, true, "Pilar");

console.log("arryy_2 => ", array_2); // [ 7777, true, 'Pilar', 'test', 'Max' ]
console.log("arryy_2.length => ", array_2.length); // 5
