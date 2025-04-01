/**
 * Author: Alessandro Scattaglia
 * 
 * Performs calculations on a given number and logs the results with delays:
 * - Half of the number after 3 seconds
 * - Square of the number after 6 seconds
 * - Area of a circle with radius equal to the square of the number after 9 seconds
 * - Percentage of the area relative to the square after 12 seconds
 * @example
 * // Outputs:
 * // "1" (after 3 seconds)
 * // "4" (after 6 seconds)
 * // "50.26548245743669" (after 9 seconds)
 * // "1256.6370614359173" (after 12 seconds)
 */
function calculator(num) {
    let half = num / 2;
    let square = num * num;
    let area = Math.PI * square ** 2;
    let percentage = (area / square) * 100;

    setTimeout(() => console.log(half), 3000);
    setTimeout(() => console.log(square), 6000);
    setTimeout(() => console.log(area), 9000);
    setTimeout(() => console.log(percentage), 12000);
}

calculator(2);
