const string = ""; // <-- falsy

const filledString = "some string in here"; // <-- truthy

const zero = 0; // <-- falsy

let numberGreaterThanZero; // <-- falsy

const emptyArray = []; // <-- truthy, we'll explore more about this next

const emptyObject = {}; // <-- truthy

console.log("string => ", !!string); // false
console.log("filledString => ", !!filledString); // true
console.log("zero => ", !!zero); // false
console.log("numberGreaterThanZero => ", !!numberGreaterThanZero); // false
console.log("emptyArray => ", !!emptyArray); // true
console.log("emptyObject => ", !!emptyObject); // true

console.log(!!"0"); // true

console.log(!!-0);

let num = 0;

console.log(-Math.abs(num));

let x = 7;
console.log(x == 8); // false
console.log(x > 8); // false
console.log(x < 8); // true
console.log(x <= 7); // true
console.log(x >= 7); // true

// all true
console.log(false == 0);
console.log(0 == "");
console.log(null == undefined);
console.log([] == false);
console.log(!![0] == true);

// all false
console.log(false == null);
console.log(NaN == NaN);
console.log(Infinity == true);
console.log([] == true);
console.log([0] == true);
