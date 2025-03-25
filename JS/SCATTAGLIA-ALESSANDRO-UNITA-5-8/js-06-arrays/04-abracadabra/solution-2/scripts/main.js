/**
 * Author: Alessandro Scattaglia
 * 
 * Modifies a string by replacing a character at a specific position.
 * @example
 * // Outputs:
 * // "AbrXcadabra"
 */

let str1 = "Abracadabra";
let arr = str1.split('');
arr[3] = 'X';
let modifiedStr1 = arr.join('');
console.log(modifiedStr1);
