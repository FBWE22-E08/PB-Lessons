// String
const name = "Iva";

// Numbers
const age = 22;

// Null
const job = null;

// Undefined
let lastName;

/**
 * String methods
 */
const greeting = "Howdy";

// Length
console.log("greeting:", greeting); // "Howdy"
console.log("greeting length", greeting.length); // 5

// Accessing characters by index
console.log("second character in greeting:", greeting[1]);

// 0 1 2 3 4
// H o w d y
// "Mr John"
const stevens = "Mrs Stevens";
console.log(stevens[0] + stevens[1] + stevens[2]);

// Converting a string to uppercase
const upperCasedGreeting = greeting.toUpperCase();
console.log("upper case greeting:", upperCasedGreeting); // HOWDY

// Converting a string to lower case
const lowerCasedGreeting = greeting.toLowerCase();
console.log("lower case greeting:", lowerCasedGreeting); // howdy

/**
 *
 * String includes
 *
 */

// current greeting: Howdy
//                  does 'Howdy' includes 'y'
let isGreetingHowdy = greeting.includes("y"); // true
console.log("is greeting y:", isGreetingHowdy);

// Howdy compared with howdy
isGreetingHowdy = greeting.includes("howdy");
console.log("is greeting howdy:", isGreetingHowdy); // false

// 1. Howdy vs HowDY
// 2. howdy vs HowDY
// 3. howdy vs howdy

const userInput = "HowDY".toLowerCase();
isGreetingHowdy = greeting.toLowerCase().includes(userInput);

console.log("after conversion:", isGreetingHowdy); // true

/**
 * Trimming
 *
 * Removing whitespace from the beginning and the end of a string
 *
 */
const hi = "    hello  ";
const trimmedHello = hi.trim(); // "hello"
console.log("trimmed hello:", trimmedHello);

/**
 *
 * Substring
 *
 * H o w d y
 * 0 1 2 3 4
 * length: 5
 *
 */
//                "Howdy"
let subString = greeting.substring(2);
console.log("sub string:", subString); // 'wdy'

// Grab the character at index 2, not including index 3
subString = greeting.substring(2, 3);
console.log("sub string:", subString); // 'w'

// Grab the charaters from o to d, including d = 'owd'
subString = greeting.substring(1, 4);
console.log("sub string:", subString); // 'owd'
