/**
 *
 * Javascript is weird
 *
 */

console.log(0.1 + 0.2); // 0.30000000000000004

const price = "22";
const tax = 4;

const finalPrice = price + tax;

const firstName = "Iva";
const lastName = "Sucic";
const fullName = firstName + " " + lastName;

console.log(fullName);

console.log("final price:", finalPrice); // "224"

/**
 * Integers and floats
 *
 * Float: 2.5 - have decimal
 * Integer: 5 - do not have decimal
 *
 */

const integer = 2;
const float = 3.768;

/**
 *
 * parseInt & parseFloat
 *
 * Converting strings into numbers
 *
 */

// parseInt
const age = "22";
const salary = "234.254";
const address = "232 Miami Hellersdorf";

const ageToInteger = parseInt(age);
console.log("age to number:", ageToInteger);

const salaryToInteger = parseInt(salary);
console.log("salary to integer", salaryToInteger);

const addressToInteger = parseInt(address);
console.log("address to integer", addressToInteger);

// parseFloat
const salaryToFloat = parseFloat(salary);
console.log("salary to float:", salaryToFloat);

const ageToFloat = parseFloat(age);
console.log("age to float:", ageToFloat);
