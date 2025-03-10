/**
 * Author: Alessandro Scattaglia
 * 
 * Performs various calculations based on the input number and logs the results.
 * The calculations include halving the number, squaring it, calculating the area of a circle, 
 * and finding the percentage of the area relative to the square.
 * @param {number} num - The number used for the calculations.
 * @example
 * // Outputs:
 * // The half number is 1.5
 * // The squared number is 2.25
 * // The area of the circle is 15.707963267949466
 * // The percentage area is of the squared result is 700.0000000000001%
 * calculateCalculations(3);
 */

function calculateCalculations(num) {
    // Halve the number
    console.log(`The half number is ${num / 2}`);

    // Square the number
    console.log(`The squared number is ${Math.pow(num, 2)}`);

    // Area of the circle
    let area = Math.PI * Math.pow(num, 2);
    console.log(`The area of the circle is ${area}`);

    // Percentage of the area relative to the square
    let percentage = (area / Math.pow(num, 2)) * 100;
    console.log(`The percentage area is of the squared result is ${percentage}%`);
}

calculateCalculations(3);
