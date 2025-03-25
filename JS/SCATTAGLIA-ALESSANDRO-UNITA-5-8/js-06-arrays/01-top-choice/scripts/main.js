/**
 * Author: Alessandro Scattaglia
 * 
 * Logs a list of favorite choices with ordinal suffixes.
 * @example
 * // Outputs:
 * // "My 1st choice is blue."
 * // "My 2nd choice is dog."
 * // "My 3rd choice is The Hobbit."
 * // "My 4th choice is pizza."
 */

let choices = ["blue", "dog", "The Hobbit", "pizza"];

for (let i = 0; i < choices.length; i++) {
    let suffix = "th";
    if (i === 0) {
        suffix = "st";
    } else if (i === 1) {
        suffix = "nd";
    } else if (i === 2) {
        suffix = "rd";
    }
    console.log(`My ${i + 1}${suffix} choice is ${choices[i]}.`);
}
