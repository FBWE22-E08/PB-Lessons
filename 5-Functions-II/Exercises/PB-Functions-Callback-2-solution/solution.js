function squareNumber(number) {
  return number * number;
}

function square(array, callback) {
  return array.map((num) => callback(num));
}

const array = [1, 2, 3, 4, 5, 6];
square(array, squareNumber); // return [1,4,9,16,25]
