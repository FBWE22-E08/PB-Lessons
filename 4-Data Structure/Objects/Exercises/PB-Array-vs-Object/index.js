const handleUser = (user) => {
  if (Array.isArray(user)) {
    return "Invalid input";
  }

  if (typeof user === "object") {
    return user;
  }
};

console.log(handleUser({})); // {}
console.log(handleUser({ name: "John" })); // { name: 'John' }
console.log(handleUser([])); // Invalid input
