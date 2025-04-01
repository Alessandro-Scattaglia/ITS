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
    let counter = 1;
    function repeat() {
        callback();
        console.log(`Counter: ${counter}`);
        if (counter < 15) {
            setTimeout(repeat, delay);
        }
        counter++;
    }
    setTimeout(repeat, delay);
}

mySetInterval(() => console.log("Hello!"), 1000);
