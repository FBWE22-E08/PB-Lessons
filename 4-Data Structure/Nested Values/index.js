// Nesting arrays
const normalArray = ["a", "b", "c"]; // length = 3

console.log(normalArray[2]); // c

const nestedArray = [
  ["a", { hobbies: ["magic the gathering", "running"] }], // first

  ["b", "sd"], // second

  ["c", "bd"], // third
]; // length = 3

console.log(nestedArray[2][0]); // 'c'

console.log(nestedArray[0][1].hobbies[1]);

const max = 5;
for (let i = 0; i < max; i++) {
  console.log("I:", i);
  for (let k = 0; k < max; k++) {
    console.log("k:", k);
  }
}
