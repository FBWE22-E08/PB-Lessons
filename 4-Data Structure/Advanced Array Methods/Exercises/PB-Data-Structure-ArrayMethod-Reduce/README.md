# Array Method .reduce

Let’s say we received an array of users in the form `[{id:..., name:..., age:... }]`.

- Check out `index.js`, it contains the function `groupById`
- Complete the function `groupById` so that is creates and returns an object from the passed array.
- The newly created objects property names should be created from the id of each object in the array id as the key
- The values of the properties should be the respective objects from the array

## Example:

```js
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);

/* expected output:
{
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
```

- Such a function is really handy when working with server data.

- In this task we assume that id is unique. There may be no two array items with the same id.

- Please use array .reduce method in the solution.
