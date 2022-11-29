# Loops

## for/ in loop

- we use for in loops to loop over any iterable data type (strings, objects, arrays)
  -however, we will mostly use the for/in loop to iterate over objects

```javascript
const obj = { name: "John", lastName: "Smith" };

for (const key in obj) {
  console.log(key); // 'name' || 'lastName'
}
```

## for/ of loop

- we use for/ of loop to iterate over an array

```javascript
const names = ["Steve", "Mike"];
for (const name in names) {
  console.log(name); // "Steve" || "Mike"
}
```

## Object methods

### 1. Object.keys - returns an array with all the properties from an object

```javascript
const user = { name: "John", lastName: "Smith" };
console.log(Object.keys(user)); // ['name', 'lastName']
```

### 2. Object.values - returns an array with all the values from an object

```javascript
const user = { name: "John", lastName: "Smith" };
console.log(Object.values(user)); // ['John', 'Smith']
```

### 3. Object.entries - returns an array with arrays where the first element is the property, and the second element is the value.

```javascript
const user = { name: "John", lastName: "Smith" };
console.log(Object.entries(user)); // [['name', 'John'], ['lastName', 'Smith']]
```
