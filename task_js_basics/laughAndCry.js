/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */


var laugh = function(times) {
    var res = "";
    for (var i = 0; i < times; i++) {
        res += "ha";
    }

    return res + "!";
};

console.log(laugh(10));


/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var cry = function sadCry() {
    return "boohoo!";
};

console.log(cry());

/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions("happy", laugh);

emotions("happy", function myLaugh(times) {
    return laugh(times);
});