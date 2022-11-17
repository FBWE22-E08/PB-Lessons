function showName(name) {
  console.log("Hello " + name);
  return "My name is Jo";
  console.log("This will never be executed");
}

console.log(showName("John"));

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

console.log(myFunction(4, 3)); //  12

console.log(myFunction(2, 2)); //  4

console.log(myFunction(5, 2)); //  10

//##########################

/*let num = 20;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}*/

function oddOrEven(num) {
  if (num % 2 === 0) {
    // scope 1
    return num + ": Even";
  } else {
    // scope 2
    return num + ": Odd";
  }
}

console.log(oddOrEven(5)); // Odd
console.log(oddOrEven(20)); // Even
console.log(oddOrEven(9999)); // Odd
console.log(oddOrEven(456789)); // Odd
