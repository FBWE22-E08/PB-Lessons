/**
 * NaN - Not a Number
 */

const name = "Karlo";
const lastName = "Cosic";

// We can concatenate strings - we can add them together
const fullName = name + lastName;

// We can subtract strings
const wrong = "abc" - "c"; // ab

const addition = "2" + 2; // 22
console.log("addition: ", addition);

const subtratction = "abc" - "2"; // 2
console.log("subtratction: ", subtratction);

const nan = NaN;

console.log("type of NaN", typeof NaN);

// isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true
console.log(isNaN(undefined)); // true
console.log(isNaN(Infinity / Infinity)); // true
console.log(isNaN(23)); // false

// Highest possible number in javascript
const maximumValue = Infinity;

console.log(isFinite(Infinity)); // false
console.log(isFinite(299)); // true

// Any number divided by 0, gives Infinity apart from 0. 0 divided by 0 is NaN
console.log(1 / 0); // Infinity

const billion = 1e9;
console.log("billion", billion);
