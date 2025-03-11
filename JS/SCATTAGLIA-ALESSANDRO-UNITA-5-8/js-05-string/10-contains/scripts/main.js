/**
 * Author: Alessandro Scattaglia
 * 
 * Checks if one string contains another and returns true or false.
 * @example
 * // Outputs:
 * // true
 */

function aContainsB(str, text) {
    if (str.indexOf(text) != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(aContainsB("Another hello world", "hell"));
