/**
 * Author: Alessandro Scattaglia
 * 
 * Logs the current time every second in "HH:MM:SS" format using `setInterval`.
 * @example
 * // Outputs (repeating every second):
 * // "12:34:56"
 * // "12:34:57"
 * // ...
 */
function clock() {
    setInterval(() => {
        const now = new Date();
        const time = now.toTimeString().slice(0, 8);
        console.log(time);
    }, 1000);
}

clock();
