function sayBye(firstName, lastName) {
  function fullName() {
    return firstName + " " + lastName;
  }

  // return "Bye " + firstName + " " + lastName;
  return "Bye " + fullName();
}

console.log(sayBye("John", "Doe")); // Bye John Doe

function makeCounter(num) {
  let count = num;

  return function (int) {
    // console.log("int => ", int);
    count++;
    return int ? count + int : count;
  };
}

const counter = makeCounter(10);

console.log("counter(5) => ", counter(5)); // 16
console.log(counter()); // 12
console.log(counter()); // 13
