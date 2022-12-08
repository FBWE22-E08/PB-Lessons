function createBase(baseNumber) {
  return function (number) {
    return baseNumber + number;
  };
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
