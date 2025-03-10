/**
 * Author: Alessandro Scattaglia
 * 
 * Checks if one string contains another and returns true or false.
 * @example
 * // Outputs:
 * // true
 */

function aContainsB(string1, string2) {
    if (string1.indexOf(string2) != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(aContainsB("Another hello world", "hell"));
