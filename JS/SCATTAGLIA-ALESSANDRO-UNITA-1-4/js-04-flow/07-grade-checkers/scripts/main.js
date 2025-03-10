/**
 * Author: Alessandro Scattaglia
 * 
 * Assigns a letter grade based on the score and logs the result for scores from 60 to 100.
 * @example
 * // Outputs:
 * // "For 60, you got a D."
 * // "For 61, you got a D."
 * // "For 62, you got a D."
 * // ...
 * // "For 100, you got a A."
 * 
 */

function assignGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

for (let score = 60; score <= 100; score++) {
    console.log(`For ${score}, you got a ${assignGrade(score)}.`);
}
