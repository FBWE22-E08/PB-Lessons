// 1. Dog
const dog = {
  age: null,
  breed: null,
  cuteness: null,
};

dog.breed = "beagle";
dog.age = 8;
dog.cuteness = "overload";

dog["weight"] = 14;
dog["name"] = "Tobi";

console.log(dog);

// 2. Create Character

const createCharacter = (name, specialSkill, type) => {
  if (type === "powerRanger") {
    return {
      type,
      name,
      specialSkill,
      coolnessLevel: 9,
    };
  }

  if (type === "pokemon") {
    return {
      type,
      name,
      specialSkill,
      coolnessLevel: 8.5,
    };
  }

  return null;
};

console.log(createCharacter("Pikachu", "lightning", "pokemon")); // { name: "Pikachu", specialSkill: "lightning", type: "pokemon", coolnessLevel: 8.5 }
console.log(createCharacter("Pikachu", "lightning", "developer")); // null

// 3. Calculate Final price

const calculateFinalPrice = (price, discount) => {
  return {
    price,
    discount,
    finalPrice: price - discount,
  };
};

const calculateFinalPriceShorter = (price, discount) => ({
  price,
  discount,
  finalPrice: price - discount,
});

console.log(calculateFinalPrice(10, 2)); // { price: 10, discount: 2, finalPrice: 8 }
