/**
 * Author: Alessandro Scattaglia
 * 
 * Iterates through numbers from 0 to 19 and logs whether each number is even or odd.
 * @example
 * // Outputs:
 * // "The number 0 is even"
 * // "The number 1 is odd"
 * // "The number 2 is even"
 * // "The number 3 is odd"
 * // "The number 4 is even"
 * // "The number 5 is odd"
 * // ...
 * // "The number 18 is even"
 * // "The number 19 is odd"
 */

for (i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(`The number ${i} is even`);
    }
    else {
        console.log(`The number ${i} is odd`);
    }
}
