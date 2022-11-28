**8. A Lifetime Supply...**
You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function named `calcLifetimeSupply` to help you calculate that amount for yourself. The function should accept two arguments: current age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100. The function should return a string like in the example below.

Examples:

- `calcLifetimeSupply(25, 2)` ➞ "The snack company should provide you with 54 units, until you are a ripe old age of 100. Happy snacking!"

- `calcLifetimeSupply(40, 3)` ➞ "The snack company should provide you with 65 units, until you are a ripe old age of 100. Happy snacking!"

**Bonus:**

1. Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off).
2. Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).
   Bonus
   - `calcLifetimeSupply(32, 0.58, 65)` ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!"

**9. Where's Waldo?**
Create a function named `isWaldoHere` that takes a string and returns `true` if Waldo is found, and `false` if he's not.

Examples:

- `isWaldoHere("is there a wal here?")` ➞ false
- `isWaldoHere("I found you Waldo!")` ➞ true
- `isWaldoHere("Wait, don't you mean Wally?")` ➞ false
- `isWaldoHere("waldo is here")` ➞ true

**10. Pie.**
Create a function named `isEqualSlices` that determines whether or not it's possible to split a pie fairly given these three parameters:

- Total number of slices.
- Number of recipients.
- How many slices each person gets. (in that order)

Examples:

- `isEqualSlices(11, 5, 3)` ➞ false // 5 people x 3 slices each = 15 slices > 11 slices

- `isEqualSlices(8, 3, 2)` ➞ true
- `isEqualSlices(8, 3, 3)` ➞ false
- `isEqualSlices(24, 12, 2)` ➞ true

**11. XO**
Create a function named `isEqualNumXandOs` that takes a string, checks if it has the same number of 'x's and 'o's and returns either `true` or `false`.

Notes:

- Return a boolean value (`true` or `false`).
- The string can contain any character.
- When neither an x nor an o is in the string, return `true`.

Examples:

- `isEqualNumXandOs("ooxx")` ➞ true
- `isEqualNumXandOs("xooxx")` ➞ false
- `isEqualNumXandOs("ooxXm")` ➞ true (case insensitive)
- `isEqualNumXandOs("zpzpzpp")` ➞ true (returns true if no x and o)
- `isEqualNumXandOs("zzoo")` ➞ false

**12. isPrime?**
Create a function named `isPrime` that returns `true` if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer _greater than 1_, which is _only evenly divisible by two divisors: itself and 1_. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:

- `isPrime(7)` ➞ true
- `isPrime(9)` ➞ false
- `isPrime(10)` ➞ false

**13. Validate Email.**
Create a function named `validate` that takes a string, checks for valid email address syntax, and then returns either `true` or `false` accordingly. (expected output is a boolean)

NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

- The string must contain exactly one "@" character
- The string must contain at least one "." character
- The "." and the "@" must be in the appropriate places:
  - neither "." nor "@" can be the last character
  - "." can neither be directly before, nor directly after, "@"
  - there cannot be consecutive "." characters
  - "@" must have at least one character in front of it

Examples:

- "j@example.com" is valid while "@example.com" is invalid
- e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
- e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid

**Good Luck & Enjoy :)**
