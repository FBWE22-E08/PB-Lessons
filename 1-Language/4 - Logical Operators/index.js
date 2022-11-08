/**
 * Logical operators
 *
 * 1. && - and operator
 * 2. || - or operator
 * 3. !  - not operator
 *
 */

const first = 10;
const second = 20;
const third = 30;

console.log(first < second); // true

// && operator
//               true      +        true      = true
console.log(first < second && first < third); // true
//                true     +        false     = false
console.log(first < second && first > third); // false

// || operator
//                true     or        false
console.log(first < second || second > third); // true
//               false     or      false
console.log(first > second || first > third); // false

// Not operator
console.log("not operator:", !true);
//          10    >  20   = false

// is 10 smaller than 20 == true
console.log(first < second); // true
// 10 isn't smaller than 20
console.log(!(first > second)); // true
