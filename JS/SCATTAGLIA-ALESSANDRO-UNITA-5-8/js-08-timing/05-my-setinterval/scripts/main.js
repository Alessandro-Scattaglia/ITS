/**
 * Author: Alessandro Scattaglia
 * 
 * Implements a custom `setInterval` function that repeatedly executes a callback with a specified delay.
 * The execution stops after 15 iterations.
 * @example
 * // Outputs (with 1-second intervals):
 * // "Hello!"
 * // "Counter: 1"
 * // "Hello!"
 * // "Counter: 2"
 * // ...
 * // "Hello!"
 * // "Counter: 15"
 */
function mySetInterval(callback, delay) {
    for (let i = 1; i <= 15; i++) {
        setTimeout(() => {
            callback();
            console.log(`Counter: ${i}`);
        }, delay * i);
    }
}

mySetInterval(() => console.log("Hello!"), 1000);
