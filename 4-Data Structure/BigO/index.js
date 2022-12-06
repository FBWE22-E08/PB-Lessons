// Big O Notation

// It is about estimating how well our algorithms/solutions perform

// We want to understand how much space and time our algorithms take

const arr = ["A", "B", "C", "D", "E"];
// time complexity: O(n) = n - lenght of the array
// space complexity: O(1)

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Time complexity: O(3n) => O(n)
// Space complexity O(2234234234234234) => O(1)

const calculateAverage = (arr) => {
  let sum = 0; // 1
  // 1        // n = arr.length // n
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // n
  }

  return sum / arr.length; // 1
};

console.log(calculateAverage([2, 3, 4, 1])); // 2.5

// Time complexity: O(n + m)

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 23, 24, 17];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// O(213213123n) => O(n)
// O(23132123) => O(1)

const arr3 = [1, 2, 3, 4, 5, 6, 7];

// Time complexity => O(n * n) => O(n2)

for (let i = 0; i < arr3.length; i++) {
  console.log("outer loop");
  for (let j = 0; j < arr3.length; j++) {
    console.log(arr3[j]);
  }
}
