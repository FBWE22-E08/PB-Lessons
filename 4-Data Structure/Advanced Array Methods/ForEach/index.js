// For each array method - it is an array method which will
// call the passed callback function on each element inside of it
const names = ["John", "Steve", "Steffi"];

names.push("Maria");

for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} should be home by now!`);
}

// Using function expression
names.forEach(function (name) {
  console.log(`${name} should be home by now!`);
});

// Using arrow function expression
names.forEach((name) => {
  console.log(`${name} should be home by now!`);
});

const callbackFn = (name) => {
  console.log(`${name} should be home by now!`);
};

names.forEach(callbackFn);

// const nums = [1, 2, 3, 4];

// const func = (num) => {
//   console.log(num);
// };

// nums.forEach(func);

// Callbacks - in Javascript, we can pass functions as parameters

// function hi(func) {
//   console.log("hi there from the hi function");
//   func();
// }

// function bye() {
//   console.log("byeeeeee");
// }

// function tada() {
//   console.log("ta daaaa");
// }

// hi(bye);

// hi(tada);
