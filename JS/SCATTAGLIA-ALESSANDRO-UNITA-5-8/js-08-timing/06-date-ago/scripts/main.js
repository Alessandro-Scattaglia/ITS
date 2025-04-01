/**
 * Author: Alessandro Scattaglia
 * 
 * Returns the day of the month for a date that is a specified number of days before or after a given date.
 * @example
 * // Outputs:
 * // "23" (5 days before March 28, 2025)
 * // "30" (2 days after March 28, 2025)
 */
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() - days);

    return dateCopy.getDate();
}

console.log(getDateAgo(new Date(2025, 2, 28), 5));
console.log(getDateAgo(new Date(2025, 2, 28), -2));
