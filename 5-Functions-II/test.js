const countObject = {};

let a = "a";

countObject[a] = undefined;

console.log(countObject);

countObject[a] = (countObject[a] || 0) + 1;

console.log(countObject);

console.log(undefined || 0);
