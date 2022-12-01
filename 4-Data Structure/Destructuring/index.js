// Destructuring

const arr = ["John", "Travolta", 60];
console.log(arr);

//  Not using destructuring
// const name = arr[0]; // 'John'
// const lastName = arr[1]; // 'Travolta'

// Destructuring arrays
const [name, lastName, age] = arr;

// const name = 'John'
// const lastName = 'Travolta'

console.log(name); // 'John'
console.log(lastName); // 'Travolta'
console.log(age); // 60

const emperor = ["Julius", "Caesar", "Consul", "Roman Emperor"];

const [firstName, surname, , title] = emperor;

console.log(firstName, surname, title); // Julius Caesar Roman Emperor

// Destrucuring strings
const str = "abc";
const [letterA, letterB, letterC] = str; // ['a', 'b', 'c']

console.log(letterA, letterB, letterC); // 'a', 'b', 'c'

// Destructuring objects

const actor = {
  actorName: "John",
  actorLastName: "Travolta",
};

// Without destructuring

// const actorName = actor.actorName;
// const actorLastName = actor.actorLastName;

const { actorName, actorLastName } = actor;

console.log(actorName, actorLastName); // 'John', 'Travolta'

// Destructuring with rest
const obj = {
  k: 23,
  l: 11,
  m: 45,
  n: 13,
  o: 99,
};

const { k, l, ...rest } = obj;

console.log(k, l, rest);

const easyFunction = (arr) => {
  // Without destructuring
  const num1 = arr[0];
  const num2 = arr[1];
  const num3 = arr[2];
  const num4 = arr[3];

  return num1 + num2 + num3 + num4;
};

console.log(easyFunction([1, 2, 3, 4]));

const easyDestructuring = (arr) => {
  const [first, second, third, fourth] = arr;

  return first + second + third + fourth;
};

console.log(easyDestructuring([1, 2, 3, 4]));

// Destructuring the parameters of a function

const user = {
  lastName: "Brown",
  name: "Jeff",
};

// We destructured in the function parameter
const showUserData = ({ name, lastName }) => {
  // Instead of destructuring on line 91, we can destructure the parameters
  // const { name, lastName } = obj;
  console.log(name, lastName);
};

showUserData(user);
