/**
 * Author: Alessandro Scattaglia
 * 
 * Performs various calculations based on the input number and returns the area and percentage.
 * The calculations include halving the number, squaring it, calculating the area of a circle, 
 * and finding the percentage of the area relative to the square.
 * @example
 * // Outputs:
 * // { area: 12.566370614359172, percentage: 700.0000000000001 }
 * calculator(2);
 */

function calculator(num) {
    let half = num / 2;  
    let square = half * half; 
    let area = Math.PI * square ** 2;  
    let percentage = (area / square) * 100;  

    return { area, percentage }; 
}

console.log(calculator(2));
