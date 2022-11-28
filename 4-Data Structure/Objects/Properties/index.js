// Objects
// A person who is 30 years old, named John that lives in Paris.
const name = "John";
const age = 30;
const residency = "Paris";

const user = {
  name: "John",
  age: 30,
  residency: "Paris",
};

console.log("first user: ", user);

// Property accessors
// 1. DOT NOTATION

// Accessing the residency property
console.log(user.residency); // 'Paris'

// Set a property on an object
user.hasChildren = true;
user.isHappy = true;
user.numberOfChildren = 7;
user.petName = "Jazz";

console.log("user after adding properties: ", user);

// Delete a property on an object
delete user.numberOfChildren;

console.log("third log of the user after deletion:", user);

// 2. BRACKET NOTATION
const dog = {
  hairColor: "purple",
  teethSize: 100,
  ears: 3,
};

// dot notation vs bracket notation
console.log(dog.hairColor); // 'Purple'
console.log(dog["hairColor"]); // 'Purple'

// With bracket notation, we can use multi word properties
const hamster = {
  "eye color": "fluorescent",
  size: 9,
};

// This won't work!!!
// console.log("hamster:", hamster.eye color);

// Only with bracket notation, can we access multiword properties
console.log(hamster["eye color"]);

// Setting a property on an object using bracket notation

hamster["likes nuts"] = true;
hamster["isHappy"] = true;

console.log(hamster);

// Computed properties
const itemToBuy = "blueberry";

// When we want to use a variable as a property name
// We have write it inside square brackets
const shoppingCart = {
  [itemToBuy]: 20,
};

console.log(shoppingCart);

// Object comparison
const a = {
  name: "John",
  age: 22,
};

const b = {
  name: "John",
  age: 22,
};

console.log("object a", a);
console.log("object b", b);

console.log(a === b, "are the objects the same"); // false

// Primitive vs Non Primitive
// Primitive values are immutable, they cannot be changed (number, string, undefined..)
// Non primitive values are mutable, they can be changed (objects)
let first = "John";

const second = first; // 'John'
console.log(second, "second");

first = "Steve";

// Our second did not change
console.log(second); // 'John'

// Non primitive values
const firstObj = { name: "Steve" };
const thirdObj = firstObj;
const secondObj = firstObj; // { name: "Steve" }

console.log("secondObj", secondObj);

firstObj.name = "Mary";
firstObj.lastName = "Hoss";

console.log(firstObj, "first obj");
console.log(secondObj, "second obj");
console.log(thirdObj, "third obj");

let str = "Whatever";
str += " hello"; // 'Whatever hello'
console.log(str);

let num = 90;
num += 10;

console.log(num);

// Nested objects
const personA = {
  name: {
    first: "John",
    last: "Seagal",
  },
  address: {
    country: "Germany",
    city: "Berlin",
    street: "Whatever",
    streetNumber: 2,
  },
};

console.log(personA.name.first);
console.log(personA.address.city);

// Factory function - a function which returns an object
const createUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

// Shorter way of wrtiting it
const createUserShorter = (name, age) => {
  return {
    name,
    age,
  };
};

// Shortest way of writing it
const createUserShortets = (name, age) => ({
  name,
  age,
});

console.log(createUser("Steven", 44));

// If we have two properties which have the same name,
// The one that comes after will overwrite the first one
const obj = {
  age: 18,
  age: 72,
};

console.log(obj); // { age: 72 }
