/**
 * Author: Alessandro Scattaglia 
 *
 * Converts temperatures between Celsius and Fahrenheit.
 * @example
 * // Outputs: "celsius 0 to 32" and "fahrenheit 32 to celsius 0"
 */

let celsius = 0;
let celsius_convertito = (celsius * 9 / 5) + 32;

let fahrenheit = 32;
let fahrenheit_convertito = (fahrenheit - 32) * 5 / 9;

console.log(`celsius ${celsius} to ${celsius_convertito}`);
console.log(`fahrenheit ${fahrenheit} to celsius ${fahrenheit_convertito}`);
