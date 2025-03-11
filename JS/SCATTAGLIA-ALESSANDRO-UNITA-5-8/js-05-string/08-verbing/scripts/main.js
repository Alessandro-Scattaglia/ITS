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

function verbing(str) {
    if (str.length < 3) {
        console.log(str);
    }
    else if ((str.slice(-3) == "ing")) {
        console.log(str + "ly");
    }
    else {
        console.log(str + "ing");
    }
}

verbing("swim");
verbing("swimming");
verbing("go");
