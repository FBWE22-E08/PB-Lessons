/*function recurse() {
  // ...
  recurse();
  // ...
}

function recurse() {
  if (condition) {
    // Base Case
    // stop calling itself
    //...
  } else {
    // Recursive Step
    recurse();
  }
}

function countDown(num) {
  console.log(num);

  let newNum = num - 1;

  if (newNum > 0) {
    countDown(newNum);
  }
}

countDown(4);

// factorial 3! = 3 * 2 * 1 = 6
// factorial 4! = 4 * 3 * 2 * 1 = 24
// factorial 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800

function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(4));
console.log(factorial(3));
*/

function nestedArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // if the item is array call nestedArrays again
      nestedArrays(arr[i]);
    } else {
      // if the item is not array print it
      console.log(arr[i]);
    }
  }
}

nestedArrays(["a", "b", [1, 2, ["test 1", "test 2", ["Alex"]]]]);
