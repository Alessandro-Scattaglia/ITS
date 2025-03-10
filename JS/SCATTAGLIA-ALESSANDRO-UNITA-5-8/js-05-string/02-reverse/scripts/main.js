/**
 * Author: Alessandro Scattaglia
 * 
 * Reverses a string and logs the result.
 * @example
 * // Outputs:
 * // "rabtoof"
 */

function printReverse(string) {
    return string.split("").reverse().join("");
}

console.log(printReverse("footbar"));
