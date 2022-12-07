# Callbacks
- Work in `solution.js`

#### Greet Users
* Create a function named `greetMessage` which prints a greeting message for a name passed as argument
* Create a function named `greetUsers` which receives an array of users and the `greetMessage` as a callback function and greets each user.


```javascript
    greetMessage("John") // print "Good Morning, John"

    greetUsers(["John","Peter","Mark"], greetMessage)
    // "Good Morning, John"
    // "Good Morning, Peter"
    // "Good Morning, Mark"
```