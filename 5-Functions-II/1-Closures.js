const greeting = function () {
  const message = "Hello";
  const getMessage = function () {
    // Closure
    return message;
  };

  return getMessage();
};

const greeting_de = function () {
  const message = "Guten Tag!";
  const getMessage = function () {
    // Closure
    return message;
  };

  return getMessage();
};

console.log(greeting());
console.log(greeting_de());

function counter() {
  let count = 0;

  const getCounter = function () {
    return (count += 1);
  };

  return getCounter;
}

//console.log(counter()); // [Function (anonymous)]

const genNumber = counter();
console.log(genNumber()); // 1
console.log(genNumber()); // 2
console.log(genNumber()); // 3
console.log(genNumber()); // 4

const genId = counter();
console.log(genId()); // 1
console.log(genId()); // 2
