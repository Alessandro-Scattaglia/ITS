/**
 * Author: Alessandro Scattaglia
 * 
 * Converts temperature between Celsius and Fahrenheit.
 * @example
 * // Outputs: "0°C is 32°F"
 * celsiusToFahrenheit(0);
 * @example
 * // Outputs: "32°F is 0°C"
 * fahrenheitToCelsius(32);
 */

function celsiusToFahrenheit(celsius) {
    console.log(`${celsius}°C is ${(celsius * 9 / 5) + 32}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    console.log(`${fahrenheit}°F is ${(fahrenheit - 32) * 5 / 9}°C`);
}

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);
