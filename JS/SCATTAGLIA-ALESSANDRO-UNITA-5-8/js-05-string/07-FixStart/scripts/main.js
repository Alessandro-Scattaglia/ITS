/**
 * Author: Alessandro Scattaglia
 * 
 * Replaces all occurrences of the first letter in a string (except the first one) with an asterisk.
 * @example
 * // Outputs:
 * // "bub**e"
 */

function FixStart(string) {
    let first = string[0];
    console.log(first + string.slice(1).replaceAll(first, "*"));
}

FixStart("bubble");
