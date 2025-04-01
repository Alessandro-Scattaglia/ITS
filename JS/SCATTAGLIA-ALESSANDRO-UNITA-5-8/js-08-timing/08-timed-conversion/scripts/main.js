/**
 * Author: Alessandro Scattaglia
 * 
 * Converts temperatures between Celsius and Fahrenheit every second using `setInterval`.
 * @example
 * // Outputs (repeating every second):
 * // "0°C is 32°F"
 * // "32°F is 0°C"
 */
function celsiusToFahrenheit(celsius) {
    console.log(`${celsius}°C is ${(celsius * 9 / 5) + 32}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    console.log(`${fahrenheit}°F is ${(fahrenheit - 32) * 5 / 9}°C`);
}

let timerId = setInterval(() => {
    celsiusToFahrenheit(0);
}, 1000);

let timerId1 = setInterval(() => {
    fahrenheitToCelsius(32);
}, 1000);
