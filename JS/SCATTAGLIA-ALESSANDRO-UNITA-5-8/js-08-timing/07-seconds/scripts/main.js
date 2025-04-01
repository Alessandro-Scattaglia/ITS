/**
 * Author: Alessandro Scattaglia
 * 
 * Calculates the number of seconds that have passed since the start of the day and the number of seconds remaining until the next day.
 * @example
 * // Outputs (depending on the current time):
 * // "Secondi passati di oggi: xxxx sec"
 * // "Secondi rimanenti di oggi: xxxx sec"
 */
function getSecondsToday() {
    const now = new Date();
    const seconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    return seconds;
}

function getSecondsTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const seconds = (tomorrow - now) / 1000;
    return seconds;
}

console.log(`Secondi passati di oggi: ${getSecondsToday()} sec`);
console.log(`Secondi rimanenti di oggi: ${getSecondsTomorrow()} sec`);
