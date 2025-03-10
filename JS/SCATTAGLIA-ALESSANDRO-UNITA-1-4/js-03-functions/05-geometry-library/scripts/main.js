/**
 * Author: Alessandro Scattaglia
 * 
 * Calculates the circumference and area of a circle based on the radius.
 * @example
 * // Outputs: "The circumference is 62.83185307179586"
 * // Outputs: "The Area is 314.1592653589793"
 * calcCircumference(10);
 * calcArea(10);
 */

function calcCircumference(radius) {
    console.log(`The circumference is ${2 * Math.PI * radius}`);
}

function calcArea(radius) {
    console.log(`The Area is ${Math.PI * (radius * radius)}`);
}

calcCircumference(10);
calcArea(10);
