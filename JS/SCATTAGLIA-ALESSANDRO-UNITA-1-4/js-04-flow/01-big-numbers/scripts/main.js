/**
 * Author: Alessandro Scattaglia
 * 
 * Compares two numbers and logs the greatest one.
 * @example
 * // Outputs:
 * // "The greatest number of 99 and 21 is 99"
 * // "The greatest number of 2 and 1 is 2"
 * greaterNum(99, 21);
 * greaterNum(2, 1);
 */

function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log(`The greatest number of ${num1} and ${num2} is ${num1}`);
    }
    else {
        console.log(`The greatest number of ${num1} and ${num2} is ${num2}`);
    }
}

console.log(greaterNum(99, 21));
console.log(greaterNum(2, 1));
