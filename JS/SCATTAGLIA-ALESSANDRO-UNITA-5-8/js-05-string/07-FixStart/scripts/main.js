/**
 * Author: Alessandro Scattaglia
 * 
 * 
 * Replaces all occurrences of the first letter in a string (except the first one) with an asterisk.
 * @example
 * // Outputs:
 * // "bub**e"
 */

function FixStart(str) {
    let first = str[0];
    let parts = str.slice(1).split(first);
    console.log(first + parts.join("*"));
}

FixStart("bubble");
