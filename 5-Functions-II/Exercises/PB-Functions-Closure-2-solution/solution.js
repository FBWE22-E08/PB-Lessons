// 1. What’s the result of executing this code and why.
console.log("Question 1")
function closureOne() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

closureOne();
/*
    RESULT
    Question 1
    undefined
    2

    EXPLANATION
    The "a" variable is undefined, because even though "a" is hoisted because
    it's a var, it doesn't have a value when the console.log runs.
    Function foo returns 2 because function declarations are entirely hoisted to
    the beginning of the block.
*/

// ************************************************************************* //

// 2. What is the result?
console.log("Question 2")
var a = 1; 

function closureTwo(number) {
    function inner(input) {
        return a;
    }

    a = 5;

    return inner;
}

var resultOfClosureTwo = closureTwo(9);
var result = resultOfClosureTwo(2);
console.log(result)

/*
    RESULT
    Question 2
    5

    EXPLANATION
    The "result" gets its value from running the "inner" function.
    The "inner" function returns the value of the "a" variable at the when it's
    run even though "inner" was defined when "a" was 1, the value of "a" changes
    before "inner" is actually executed. The "closureTwo", "number", "input"
    have no effect on this. The "inner" function will remain in memory as long
    as there is a reference to it.
*/

// ************************************************************************* //

// 3. What is the result of the following code? Explain your answer
console.log("Question 3")
var fullname = 'John Doe';
var user = {
    fullname: 'Colin Ihrig',
    name: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(user.name.getFullname());

var test = user.name.getFullname;
console.log(test())

/*
    RESULT
    Question 3
    Aurelio De Rosa
    undefined

    EXPLANATION
    During first run, the "this" refers to `user.name`; "Aurelio De Rosa".
    During second run, the "this" is actually referring to the global scope.
    To experiment, add "console.log(this)" before the return
    Tp experiment, try the following

    var user = { fullname: "Potato", test: test }
    console.log(user.test())
*/

// ************************************************************************* //

// 4. What will you see in the console for the following example?
console.log("Question 4")
var interesting = 1;
function doSomeStuff() {
    interesting = 10;
    return;
    function interesting() {}
} 
doSomeStuff(); 
console.log(interesting);

/*
    RESULT
    Question 4
    1

    EXPLANATION
    The `interesting = 10` has no effect because the function "interesting"
    actually gets hoisted BEFORE the "interesting=10" assignment. This actually
    creates an "interesting" variable that is scoped to the "doSomeStuff"
    function. That way "interesting=10" actually overrides the _function_, not 
    the var as you might think.

    Use for experimentation! Add sconsole.log(interesting) EVERYWHERE and play
    with it the order of operations
*/