# PB-Array-vs-Object

# Array vs Objects

Create a function called `handleUser`. It should accept one parameter, `user`.

If the type of the parameter is an object, return the object that was passed to it.
If the type of the parameter is an array, return "Invalid input".

```javascript
console.log(handleUser({})); // {}
console.log(handleUser({ name: "John" })); // { name: 'John' }
console.log(handleUser([])); // Invalid input
```
