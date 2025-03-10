/**
 * Author: Alessandro Scattaglia
 * 
 * Adds two numbers together and logs the result.
 * @example
 * // Outputs: 6
 * addNumbers(2, 4);
 * @example
 * // Outputs: 100
 * addNumbers(1, 99);
 * @example
 * // Outputs: 7
 * addNumbers(2, 5); // where 5 is a global variable
 */

let variabile_globale = 5;

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(2, 4));
console.log(addNumbers(1, 99));
console.log(addNumbers(2, variabile_globale));