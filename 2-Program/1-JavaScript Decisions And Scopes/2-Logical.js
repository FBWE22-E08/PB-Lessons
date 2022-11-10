// AND &&

const a = true;
const b = false;
const c = 4;

console.log(a && b && c); // false

// OR ||

console.log(a || b || false);

// NOT !

console.log(!a); // false
console.log(!c); // false

console.log("#############################");

// .           false         false
console.log((2 && null) || false); // false

// .           false        true
console.log((2 && null) || !false); // true

//         false  false     true
console.log((!2 && null) || !false); // true

console.log((!2 && null) || (!false && !!0)); // false

console.log("" || (null && false) || "Alex"); // 'Alex'

console.log("" || (null && false) || !!"Alex"); // true

console.log("" || (null && false) || !"Alex"); // false
