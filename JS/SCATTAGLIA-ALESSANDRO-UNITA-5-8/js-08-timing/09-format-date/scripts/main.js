/**
 * Author: Alessandro Scattaglia
 * 
 * Formats a date based on its difference from the current time:
 * - "right now" if less than 1 second ago
 * - "{x} sec. ago" if less than 1 minute ago
 * - "{x} min. ago" if less than 1 hour ago
 * - "DD.MM.YY HH:MM" for older dates
 * @example
 * // Outputs (depending on the current time):
 * // "right now"
 * // "3 sec. ago"
 * // "2 min. ago"
 * // "01.01.23 12:30"
 */
function formatDate(date) {
    const now = new Date();
    const diff = now - date; 
    
    if (diff < 1000) {
        return "right now";
    }
    
    const sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return `${sec} sec. ago`;
    }
    
    const min = Math.floor(diff / (1000 * 60));
    if (min < 60) {
        return `${min} min. ago`;
    }
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(formatDate(new Date())); // "right now"
console.log(formatDate(new Date(Date.now() - 3000))); // "3 sec. ago"
console.log(formatDate(new Date(Date.now() - 120000))); // "2 min. ago"
console.log(formatDate(new Date(2023, 0, 1, 12, 30))); // "01.01.23 12:30"
