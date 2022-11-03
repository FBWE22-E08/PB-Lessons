let firstName = "Alex";
let lastName = "Tommy";
let city = "Berlin";

console.log("My name is", firstName, lastName, "I live in", city); //My name is Alex Tommy I live in Berlin
console.log(`My name is ${firstName} ${lastName} I live in ${city}`); // My name is Alex Tommy I live in Berlin

console.log("My name is ${firstName} ${lastName} I live in ${city}");
// My name is ${firstName} ${lastName} I live in ${city}

let x = 4;

let y = 7;

console.log(`the result is ${2 + 2}`); // the result is 4

console.log(`the result is ${x + y}`); // the result is 11

console.log("My name is:\n Pilar \n Max \n I live in Berlin.");
/**
My name is:
 Pilar 
 Max 
 I live in Berlin.
 */

// console.log("I " am Max I live in Germany"); ==> Error

console.log('I " am Max I live in Germany'); // First way to solve the problem
console.log("I \" am Max I live in Germany"); // 2nd way to solve the problem
console.log(`I " am Max I live in Germany`); // 3rd way to solve the problem


console.log('Javascript\\arrays') // Javascript\arrays

