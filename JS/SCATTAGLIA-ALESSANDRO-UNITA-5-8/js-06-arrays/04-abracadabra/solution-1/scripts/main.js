/**
 * Author: Alessandro Scattaglia
 * 
 * Modifies a string by replacing a character at a specific position.
 * @example
 * // Outputs:
 * // "AbrXcadabra"
 */

let str = "Abracadabra";
let modifiedStr = str.slice(0, 3) + "X" + str.slice(4);
console.log(modifiedStr);
