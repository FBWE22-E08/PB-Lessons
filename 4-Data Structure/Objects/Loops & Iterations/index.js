// 1. for/in loop - a loop we use to iterate through properties of an object

const car = {
  maker: "Hyundai",
  model: "i85",
  year: "2047",
};

for (const key in car) {
  console.log(`${key} => ${car[key]}`);
  // Print just the value of the property
  //   console.log(car[key]);
}

const myAddress = {
  city: "Berlin",
  country: "Germany",
  street: "Torstr",
  postalcode: 10119,
};

let address = "";

for (const key in myAddress) {
  address += ` ${myAddress[key]}`;
}

console.log("this is my full address:", address.trim());

// We can use for in loops to iterate over any iterable data types (strings, arrays, objects)
const str = "Hello";

for (const index in str) {
  console.log(str[index]);
}

// Object.keys - returns an array with all the properties of an object

const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
};

const fruitKeys = Object.keys(fruits);

console.log(fruitKeys); // [ 'apple', 'orange', 'pear' ]

// For loop
for (let i = 0; i < fruitKeys.length; i++) {
  console.log(fruitKeys[i]);
}

// For/ of loop - used to iterate over elements in an array
// We do not use it to iterate over an object
for (const fruit of fruitKeys) {
  console.log(fruit);
  console.log(fruits[fruit]);
}

// Object.values - returns an array with all the values from an object

const fruitValues = Object.values(fruits); // [ 28, 17, 54 ]

let amountOfFruit = 0;

for (const amount of fruitValues) {
  amountOfFruit += amount;
}

console.log("total amount of fruit:", amountOfFruit);

const secondAddress = {
  city: "Cologne",
  country: "Germany",
  street: "Hauptstrasse",
  postalcode: 10293,
};

// we want to use object values to add all these strings into one big string
const addressValues = Object.values(secondAddress); // [ 'Cologne', 'Germany', 'Hauptstrasse', 10293 ]

console.log(addressValues);
const finalAddress = addressValues.join(" ");

console.log(finalAddress); // 'Cologne Germany Hauptstrasse 10293'

//  Object.entries = returns an array with arrays/tuples in which
//  the first element is the property key (which is always a string),
//  and the second element is the property value.

const newFruits = {
  blueBerry: 38,
  orange: 57,
  banana: 24,
};

const fruitEntries = Object.entries(newFruits);

console.log(fruitEntries); // [ [ 'blueBerry', 38 ], [ 'orange', 57 ], [ 'banana', 24 ] ]

for (const fruit of fruitEntries) {
  console.log(`There are ${fruit[1]} ${fruit[0]}s`);
}

// There are 38 blueBerrys.
// There are 57 oranges
// There are 24 bananas.
