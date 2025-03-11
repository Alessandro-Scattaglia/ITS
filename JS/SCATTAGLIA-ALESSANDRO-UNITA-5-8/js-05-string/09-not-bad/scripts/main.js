/**
 * Author: Alessandro Scattaglia
 * 
 * Replaces the substring "not...bad" with "good" in a string.
 * @example
 * // Outputs:
 * // "This dinner is good!"
 * // "This movie is good!"
 * // "This dinner is bad!"
 */

function notBad(str) {
    return str.replace(/not.*bad/, 'good');
}

console.log(notBad("This dinner is not that bad!")); 
console.log(notBad("This movie was not so bad!"));    
console.log(notBad("This dinner is bad!"));
