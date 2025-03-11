/**
 * Author: Alessandro Scattaglia
 * 
 * Reverses a string and logs the result.
 * @example
 * // Outputs:
 * // "rabtoof"
 */

function printReverse(str) {
    return str.split("").reverse().join("");
}

console.log(printReverse("footbar"));
