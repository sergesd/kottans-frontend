/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num > 0) {
    var strBottles = (num === 1) ? "bottle" : "bottles";
    var strBottlesSecondPart = (num - 1 === 1) ? "bottle" : "bottles";

    var lyrics = num + " " + strBottles + " of juice on the wall! " + num + " " + strBottles + " bottles of juice! Take one down, pass it around... " + (num - 1) + " " + strBottlesSecondPart + " of juice on the wall!";
    console.log(lyrics)

    num -= 1;
}
