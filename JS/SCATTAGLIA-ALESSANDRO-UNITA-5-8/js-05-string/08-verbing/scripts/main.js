/**
 * Author: Alessandro Scattaglia
 * 
 * Adds "ing" or "ly" to a string based on certain conditions.
 * @example
 * // Outputs:
 * // "swimming"
 * // "swimmingly"
 * // "go"
 */

function verbing(string) {
    if (string.length < 3) {
        console.log(string);
    }
    else if ((string.slice(-3) == "ing")) {
        console.log(string + "ly");
    }
    else {
        console.log(string + "ing");
    }
}

verbing("swim");
verbing("swimming");
verbing("go");
