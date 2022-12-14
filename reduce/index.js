// When we give a starting value when using "reduce()"...
// ... We can also choose which TYPE of value to return!

//NOT CHANGE THE ORIGINAL ARRAY

// The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

// [1,2,3].map( ( currentValue, index )=> )

/**
 * 
 output = [1,2,2].reduce(
     (accumulator, currentValue) => accumulator + currentValue), // function 
     
     0  
     
     );

 output = 5
 accumulator is 0
 */

// A function to put each element of a number array into a string, and return the string
const putNumbersIntoString = arr => {
    return arr.reduce(((accumulator, currentValue) => accumulator + currentValue),0);
}

// The Journey Of Accumulator in the above function...

// Iteration            // Value of "accumulator"
// Before we start      ``
// 1                    `1`
// 2                    `12`
// 3                    `123`
//...
// 5                    return `12345`

let myArr = [1, 2, 3, 4, 5];    // "1 2 3 4 5"

//console.log(putNumbersIntoString(myArr));

// ==================================================================================================
// input ==>  [1, 2, 2]

// output ==> 5

let total = [1, 2, 2].reduce( function (acc, item) { return  acc + item }, 0 )

console.log(total) // 5

let reduce_1 = (arr) => {
    let acc = 0
    for (let i = 0; i < arr.length; i++){
        // arr[i] element in arr
        acc += arr[i]
    }
   return acc
}

console.log(reduce_1([1, 2, 2])) // 5

//-----------//

/*
let test = [1, 2, 2, 0].reduce(function (acc, item) {
    console.log('acc ==> ',acc)
    return acc + item

}, 0)*/


// input ==> [1, 2, 2, 0]
// output ==> '1220'
// With reduce
let myArray = [1, 2, 2, 0]

let getString = myArray.reduce((acc, number) => acc + number + ' ', '')
console.log(getString) // 1 2 2 0

// with for loop

function getString_2(arr) {
    let acc = ''
    for (let i = 0; i < arr.length; i++){
        let elementInArray = arr[i]
        acc += elementInArray + ' '
    }
    return acc

}

console.log(getString_2(myArray)) // 1 2 2 0 

//------------//

// input ==> [1,4,6,8,9]
// output ==> [4,6,8]
let myArray_2 = [1, 4, 6, 8, 9]

let getEvenNumbers = myArray_2.reduce((acc, item) => {
    if (item % 2 === 0) {
        //[ 4 ]
        //[ 4, 6 ]
        // [ 4, 6, 8 ]
       acc.push(item)
    }
    return acc
}, [])

console.log(getEvenNumbers) // [ 4, 6, 8 ]


let reduce_3 = (arr) => {
    let acc = []
    for (let i = 0; i < arr.length; i++){
        let item = arr[i]
        if (item % 2 === 0) {
            acc.push(item)
        }
    } 
    return acc
}

console.log(reduce_3([1, 4, 6, 8, 9])) // [ 4, 6, 8 ]

// ==================================================================================================

// Returning an object as the result of calling .reduce() on an array

let pets = [
    { name: 'Bob', species: "cat" },
    { name: 'Gruffles', species: "dog" },
    { name: 'Tiara', species: "dog" },
    { name: 'Cleo', species: "fish" },
    { name: 'Hunter', species: "cat" },
    { name: 'Moby', species: "fish" },
    { name: 'Jess', species: "cat" },
    { name: 'Fido', species: "dog" },
    { name: 'Rover', species: "dog" }
];

// Use reduce() to loop through every element (object) in the "pets" array...
// Every time we loop, we can update an object which stores the number of each type of pet as a property.

// For example, { dogs: 4, cats: 3, fish: 2 }
/**
 Steps:
 // If the animal in the current loop is a dog...
 // Add 1 to the "dogs" property of the object we are building...
**************************
 // Else if the animal in the current loop is a cat...
 // Add 1 to the "cat" property of the object we are building...
**************************
 // If the animal in the current loop is neither a cat nor a dog, it must be a fish
// Add 1 to the "fish" property of the object we are building...

 acc (object we are building) ==> { dogs: 0, cats: 0, fish: 0 }
 */

 /**
 let pets = [
    { name: 'Bob', species: "cat" },
    { name: 'Gruffles', species: "dog" },
    { name: 'Tiara', species: "dog" },
    { name: 'Cleo', species: "fish" },
    { name: 'Hunter', species: "cat" },
    { name: 'Moby', species: "fish" },
    { name: 'Jess', species: "cat" },
    { name: 'Fido', species: "dog" },
    { name: 'Rover', species: "dog" }
];
  */

function countPets(arr) {
    let output =  arr.reduce(function (acc, petObject) {
        if (petObject.species === 'dog') {
            acc.dogs++
          
        } else if (petObject.species === 'cat') {
            acc.cats++
           
        } else {
            acc.fish++   
        }
        return acc
    }, { dogs: 0, cats: 0, fish: 0 })
    
    return output 

}
 
console.log(countPets(pets)) // { dogs: 4, cats: 3, fish: 2 }

let countPets_1 = pets.reduce((acc, item) => {
    if (acc[item.species]) {
        // Update 
      acc[item.species]++;
    } else {
        // create now prop
      acc[item.species] = 1;
    }
    return acc;
}, {});
  
console.log(countPets_1) // { cat: 3, dog: 4, fish: 2 }




