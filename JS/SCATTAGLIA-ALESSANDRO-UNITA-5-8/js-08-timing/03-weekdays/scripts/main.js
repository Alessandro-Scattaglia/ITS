/**
 * Author: Alessandro Scattaglia
 * 
 * Returns the abbreviated weekday name for a given date, based on the specified language ('en' for English, 'it' for Italian).
 * @example
 * // Outputs:
 * // "WE" (for February 1, 2023 in English)
 * // "DOM" (for January 1, 2023 in Italian)
 * // "VEN" (for March 28, 2025 in Italian)
 */
function getWeekDay(date, language) {
    if (language === 'en') {
        const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']; 
        return days[date.getDay()];
    }
    if (language === 'it') {
        const days = ['DOM', 'LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB']; 
        return days[date.getDay()];
    }
}

console.log(getWeekDay(new Date(2023, 1, 1), 'en')); 
console.log(getWeekDay(new Date(2023, 0, 1), 'it')); 
console.log(getWeekDay(new Date(2025, 2, 28), 'it')); 
