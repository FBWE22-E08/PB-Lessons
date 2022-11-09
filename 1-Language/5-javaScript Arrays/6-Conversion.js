// Conversion Methods

// join

const colors = ["pink", "blue", "red", "yellow"];

console.log(typeof colors); // object

console.log("typeof colors.join() => ", typeof colors.join()); // string
console.log("colors.join() => ", colors.join()); // pink,blue,red,yellow

console.log("colors.join('/') => ", colors.join("/")); // pink/blue/red/yellow
console.log("colors.join('/') => ", colors.join(" / ")); // pink / blue / red / yellow

console.log("colors.join('!') => ", colors.join("!")); // pink!blue!red!yellow

console.log("colors.join('#') => ", colors.join("#")); //  pink#blue#red#yellow
console.log("colors.join('👍') => ", colors.join("👍")); // pink👍blue👍red👍yellow

console.log(
  "colors.join('#') => ",
  colors.join("#").toUpperCase().slice(4, 10)
); //  #BLUE#

console.log(colors.join("\n"));

/**
pink
blue
red
yellow 
 */

console.log("################################");

// str.split

const names = "Bilbo/Gandalf/Nazgul";

console.log(names.split("/")); // [ 'Bilbo', 'Gandalf', 'Nazgul' ]

const title = "javaScript Arrays the Non-Primitive Data type.";

console.log(title.split(" ")); // [ 'javaScript', 'Arrays', 'the', 'Non-Primitive', 'Data', 'type.' ]

let str = "test";

console.log(str.split("")); // ["t","e","s","t"]
