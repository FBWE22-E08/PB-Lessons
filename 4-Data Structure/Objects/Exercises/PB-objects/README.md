# 1. Dog

## Accessing and assigning properties

Create an object called `dog` with 3 properties - `age`, `breed` and `cuteness`. The initial value of all 3 properties should be `null`.

Using [dot notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors?retiredLocale=de#dot_notation), set the `dog` properties `breed` to `'beagle'`, `age` to `8` and `cuteness` to `'overload'`.

Using [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors?retiredLocale=de#bracket_notation) set a new property called `name` to `'Tobi'`, and a property called `'weight'` to `14`.

# 2. Create Character

Create a function called `createCharacter`. The function should accept 3 parameters - `type`, `name` and `specialSkill`.
If type is equal to `'powerRanger'`, return an object containing the properties `type`, `name` and `specialSkill` with an additional property called `coolnessLevel` equal to 9.
If the type is equal to `'pokemon'`, return an object containing the properties `type`, `name` and `specialSkill` with an additional property called `coolnessLevel` equal to 8.5.

Otherwise, return null.

Examples:

```javascript
console.log(createCharacter("Pikachu", "lightning", "pokemon")); // { name: "Pikachu", specialSkill: "lightning", type: "pokemon", coolnessLevel: 8.5 }
```

```javascript
console.log(createCharacter("Pikachu", "lightning", "developer")); // null
```

# 3. Calculate Final price

Create a function called `calculateFinalPrice`. It should accept two parameters, `price` and `discount`.

Return an object that will contain `price`, `discount` and a new property called `finalPrice`. Final price is equal to `discount` subtracted from `price`.

```javascript
console.log(calculateFinalPrice(10, 2)); // { price: 10, discount: 2, finalPrice: 8 }
```
