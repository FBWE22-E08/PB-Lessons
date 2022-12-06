const users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (arr) =>
  arr.reduce((obj, currentValue) => {
    obj[currentValue.id] = currentValue;
    return obj;
  }, {});

console.log(groupById(users));
