/**
 * Author: Alessandro Scattaglia
 * 
 * Reverses a string and logs the result.
 * @example
 * // Outputs:
 * // "raboof"
 */

function printReverse(str) {
    console.log(str.split("").reverse().join(""));
}

printReverse("foobar");
