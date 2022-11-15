// Declaring a function
// Parameters vs arguments
// Functions accept parameters

// greet is an arbitrary name we give to the function
// name is also an arbitrary name we give to the parameter
function greet(name) {
  console.log(`Hello ${name}`);
}

// Invoke the function with an argument
greet("Steve");
greet("Sima");

// Calculates the square of a number
function square(num) {
  console.log(num * num);
}

square(12); // 144

// Sums up two numbers
function sum(a, b) {
  console.log(a + b);
}

sum(4, 5); // 9

function showMessage(name, message) {
  console.log(`${name}: ${message}`);
}

showMessage("John", "Hi there");
showMessage("Anna", "Well hi there as well!");
showMessage("Steve", "Hello");

// Expecting two parameters - using fallback values
function chat(name = "Missing user", message = "No message") {
  console.log(`${name}: ${message}`);
}

// We forgot to pass arguments when we called the function
chat(); // Missing user: No message
chat("Maria"); // Maria: No message
chat("Darija", "Hello"); // Darija: Hello
