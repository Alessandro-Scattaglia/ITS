/**
 * Author: Alessandro Scattaglia
 * 
 * Assigns a grade based on the score input.
 * @example
 * // Outputs:
 * // "A"
 * assignGrade(100);
 */

function assignGrade(score) {
    let grade;
    switch (score) {
        case 100:
            grade = "A";
            break;
        case 90:
            grade = "B";
            break;
        case 80:
            grade = "C";
            break;
        default:
            grade = "0";
    }
    console.log(grade);
}

assignGrade(100);
