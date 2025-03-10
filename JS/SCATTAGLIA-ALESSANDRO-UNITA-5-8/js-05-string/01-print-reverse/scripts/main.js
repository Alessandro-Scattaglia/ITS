/**
 * Author: Alessandro Scattaglia
 * 
 * Reverses a string and logs the result.
 * @example
 * // Outputs:
 * // "rabtoof"
 */

function printReverse(string) {
    console.log(string.split("").reverse().join(""));
}

printReverse("footbar");
