const variableName = "A string"; //global scope

function showMessage() {
  const variableName = "Here is some text!";
  const local = "Another string"; //local scope
  console.log(local);
  console.log("From inside the function: ", variableName);
}

showMessage();
console.log(variableName); // A string
//console.log(local); // ReferenceError: local is not defined

let anotherVariable = "something else"; // global scope
