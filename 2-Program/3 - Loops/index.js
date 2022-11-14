// Incrementing the let i;
for (let i = 0; i <= 5; i++) {
  //   console.log("hi and i is", i);
}

// Decrementing the let i;
for (let i = 5; i > 0; i--) {
  //   console.log("hi and i is", i);
}

// Break out of a loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  //   console.log("Hello", i);
}

// Continue
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  // if i is equal to 5, don't run this code, move to the next iteration of the loop
  //   console.log("Hello", i);
}

// Using a string

const userName = "John";
// console.log(userName.length); // 4
// console.log(userName[0]); // J
// console.log(userName[1]); // o
// console.log(userName[2]); // h
// console.log(userName[3]); // n

/**
 * usrName J o h n
 * indices 0 1 2 3
 *
 * length: 4
 */

//              i < 4
for (let i = 0; i < userName.length; i++) {
  //   console.log(userName[i]);
}

// Using arrays

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
/**
 * users   Maru, Katy, Goran
 * indices 0     1     2
 *
 * length: 3
 */

// for (let i = 0; i < users.length; i++) {
//   //   console.log(users[i]);
// }
const userNames = ["Maru", "Katys", "Goran"]; // 3

// Nested loops
for (let i = 0; i < userNames.length; i++) {
  const user = userNames[i];
  for (let j = 0; j < user.length; j++) {
    // console.log(user[j]);
  }
}

const first = userNames[0]; // Maru
// console.log(first);
// console.log(first[0]); // M
// console.log(first[1]); // a
// console.log(first[2]); // r
// console.log(first[3]); // u

const sets = 4;
const repetitions = 5;

// for loop

for (let i = 0; i < sets; i++) {
  //   console.log("set:", i);
  for (let j = 0; j < repetitions; j++) {
    // console.log("Lifting weight:", j);
  }
}

// while loop - Complicated version
let amount = 0;
while (amount < 50) {
  const num = Math.floor(Math.random() * 10);
  if (amount + num > 50) {
    break;
  }
  amount += num;
  console.log("amount", amount);
}

// Simple
let sum = 0;
while (sum < 50) {
  sum += Math.floor(Math.random() * 10);
  console.log(sum, "the sum");
}

let x = 100;
//   run the code only if 100 is smaller than 10
while (x < 10) {
  console.log("While loop is running");
}

// do while loop
do {
  console.log("Do While loop is running");
} while (x < 10);

let y = 60;

do {
  console.log("this is the y", y);
  y++;
} while (y < 5);
