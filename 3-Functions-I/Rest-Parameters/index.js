// Rest parameters
// Groups all the paramteres into an aray
// We use this when we don't know how many parameters we will get
const sum = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(sum(3, 4, 2, 2, 5)); // 16

// Create an addName function which will accept at least two arguments
// First argument will be the last name
// Second argument will be the first name
// We can have as many first name arguments as we want
// Return an array that will add the last name to all the first names
// addName('Smith', 'John', 'Steve", 'Mary") => ['John Smith', 'Steve Smith', 'Mary Smith']

const addLastName = (lastName, ...firstNames) => {
  const result = [];

  for (let i = 0; i < firstNames.length; i++) {
    result.push(`${firstNames[i]} ${lastName}`);
  }
  return result;
};

console.log(addLastName("Smith", "John", "Steve", "Mary", "Joshua"));
