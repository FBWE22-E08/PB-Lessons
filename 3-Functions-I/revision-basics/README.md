# PB basics revision

## 1-math.js

1. Create a function named "toPower" which takes two integers as an argument (base, power),
   and returns an integer.
   You should use a Math object method to make the calculation.

```javascript
toPower(2, 2); // 4
toPower(2, 3); // 8
toPower(3, 4); // 81
```

---

## 2-checkString.js

1. Create a function named "checkCityName".
   If a param string begins with "Ber" or "Lon",
   then return true. If not,
   return "The city name does not begin with Ber or Lon".
   The function should be case insensitive

```javascript
checkCityName("Berlin"); // true
checkCityName("London"); // true
checkCityName("New York"); // The city does not begin with Ber or Lon
```

2.  Create a function named "checkName".
    If a param string begins with "to" or "pi" or "ma",
    then return true. If not,
    return "The name does not begin with To or Pi or Ma".
    The function should be case insensitive

```javascript
checkName("Tommy"); // true
checkName("Max"); // true
checkName("PITAR"); // true

checkName("Alex"); // The name does not begin with To or Pi or Ma
```

---

## 3-checkNumber.js

1.  Create a function and should take an number as an argument.
    If the number is divisible by 3, then return number divisible by 3.
    If not, return not divisible by 3.

```javascript
isDivisibleByThree(15); // 15 divisible by 3
isDivisibleByThree(9); // 9 divisible by 3.
isDivisibleByThree(5); // 5 not divisible by 3
```

2.  Create a function and should take an number as an argument.
    If the number is 0 return false.
    If the number is divisible by 10, then return number divisible by 10.
    If not, return not divisible by 10.

```javascript
isDivisibleBy10(0); // false
isDivisibleBy10(1000); // 1000 divisible by 10.
isDivisibleBy10(5); // 5 not divisible by 10
```

---

## 4-missingNumber.js

1.  Create a function name "missingNumber" which takes two numbers between (0 - 100) as arguments,
    and the function return:
    If the missing number is 0 or 100 return the missing number itself
    If the missing number is less than 100 return "Less than 100"
    If the missing number is biggest than 100 return "biggest than 100"
    `MissingNumber = ( 200 - ( Number1 + Number2 ) )`

```javascript
missingNumber(100, 100); // 0
missingNumber(90, 80); // Less than 100
missingNumber(0, 100); // 100
missingNumber(10, 30); // biggest than 100
```

---

## 5-ternaryOperator.js

1. Create a function named "greeting".
   If passed true, return "Good Morning!".
   If passed false, return "Good Night!".

```javascript
greeting(true); // Good Morning!
greeting(false); // Good Night!
```

Use the ternary operator to complete this task.

---

## 6-loops.js

1. Create a function name `sequence` and use a loop to return the following sequence:

```javascript
sequence(16); // 1 2 4 8 16
sequence(128); // 1 2 4 8 16 32 64 128
```

Concatenate each value to a string and return a string.

2.  Create a function and use a loop to return just the numbers divisible by 3

```javascript
divisible(9); // 3 6 9
divisible(15); // 3 6 9 12 15
divisible(31); // 3 6 9 12 15 18 21 24 27 30
```

Concatenate each value to a string and return a string.

---

## 7-loopsAndArrays.js

1.  Create a function and use a loop to return array of numbers following sequence:

```javascript
multiplesByTwo(8); // [2, 4, 6, 8]
multiplesByTwo(14); // [2, 4, 6, 8, 10, 12, 14]
multiplesByTwo(21); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

The function return array of numbers and The biggest number in the array should be equal to or smaller than the function's argument.

---

## 8-problemSolving.js

1.  Create a function named "charsCount" that accepts a string as an argument.
    Check how many chars (`abcdefxyz`) the string contains,
    if any. Return the count of the chars (`abcdefxyz`) in the string.

```javascript
charsCount("test"); // 1
charsCount("ABC"); // 3
charsCount("ZzzZ"); // 4
charsCount("Tom"); // 0
```

The function should be case insensitive.
