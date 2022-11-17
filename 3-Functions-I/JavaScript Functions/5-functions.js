//Not Hoisting
// message_1("Eric"); // ReferenceError: Cannot access 'message' before initialization
// Syntax 1 (expression)

//message_1("Eric");

const message_1 = function (name) {
  console.log("Hello everyone!");
  console.log("Hello: " + name);
};

// Hoisting
// Hello everyone!
// Syntax 2 (declaration)

message_2();
message_2();

function message_2() {
  console.log("Hello everyone!");
}

message_2();
message_2();
