// 1. Get properties.
const getProperties = (obj) => {
  return Object.keys(obj);
};

const getPropertiesShorter = (obj) => Object.keys(obj);

console.log(getProperties({ name: "Mike", class: "4A", course: "English" })); //-> [ 'name', 'class', 'course' ]

// 2. Get values.

// Create a function named getValues that returns an array of values of a javascript object.

const getValues = (obj) => {
  return Object.values(obj);
};

const getValuesShorter = (obj) => Object.values(obj);

console.log(getValues({ choice1: "tea", choice2: "coffee", choice3: "milk" })); // [ 'tea', 'coffee', 'milk' ]

// 3. Convert keys and values into arrays.

// Create a function named getKeyValuePairs that converts an object into an array of key-value pairs, each pair being an array itself, and returns it.

const getKeyValuePairs = (obj) => {
  return Object.entries(obj);
};

const getKeyValuePairsShorter = (obj) => Object.entries(obj);

console.log(getKeyValuePairs({ cats: 1, dogs: 2, turtles: 4 })); //-> [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

// 4. Convert keys and values into objects.

// Create an object named person with a few properties and values as shown below. Write a function called getKeyValueObjects that returns an array of key-value objects.

const getKeyValueObjects = (obj) => {
  const result = [];
  for (const key in obj) {
    // 1. way
    // const resultObj = {};
    // resultObj[key] = obj[key];
    // result.push(resultObj);

    // 2. way
    const resultObj = { [key]: obj[key] };
    result.push(resultObj);
  }

  return result;
};

let person = {
  firstName: "Michael",
  lastName: "Smith",
  citizenship: "Germany",
  city: "Berlin",
  gender: "male",
  job: "driver",
  age: 28,
  height: 178,
  "eye colour": "brown",
};

console.log(getKeyValueObjects(person));

/**
  [
    { firstName: 'Michael' },
    { lastName: 'Smith' },
    { citizenship: 'Germany' },
    { city: 'Berlin' },
    { gender: 'male' },
    { job: 'driver' },
    { age: 28 },
    { height: 178 },
    { 'eye colour': 'brown' },
  ];
**/

// **5. Add a method.**

// Add a method named `printDetails` to the object `person` from task 4. When you call person.printDetails(), this method should return the values of the objects in a string, as shown below:"

person.printDetails = function () {
  return `${this.firstName} ${this.lastName} is a citizen of ${this.citizenship}. They are ${this.gender}, ${this.height}cm tall and have ${this["eye colour"]} eyes.`;
};

console.log(person.printDetails()); //-> "Michael Smith is a citizen of Germany. They are male, 178cm tall and have brown eyes."

// **6. Merge objects.**

// Create a function named `mergeObjects` that takes two objects as arguments, merges them into a new object, and returns it.

const mergeObjects = (obj1, obj2) => {
  return Object.assign({}, obj1, obj2);
};

const mergeObjectsShorter = (obj1, obj2) => Object.assign({}, obj1, obj2);

let firstObject = { firstName: "John" };
let secondObject = { lastName: "Smith" };

console.log("new object:", mergeObjects(firstObject, secondObject)); //-> {firstName: "John", lastName: "Smith"}
