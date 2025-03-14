/**
 * Author: Alessandro Scattaglia 
 *
 * Logs the circumference and area of a circle given its radius.
 * @example
 * // Outputs: "The circumference is 31.4" and "The area is 78.5"
 */

let raggio = 5;
let pi = 3.14;
let circonferenza = 2 * pi * raggio;
console.log(`The circumference is ${circonferenza}`);

let area = pi * (raggio * raggio);
console.log(`The area is ${area}`);
