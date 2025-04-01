/**
 * Author: Alessandro Scattaglia
 * 
 * Converts temperatures between Celsius and Fahrenheit every second using `setInterval`.
 * @example
 * // Outputs (repeating every second):
 * // "0°C converted to Fahrenheit is 32°F"
 * // "1°C converted to Fahrenheit is 33.8°F"
 * // "2°C converted to Fahrenheit is 35.6°F"
 * etc.
 */
function celsiusToFahrenheit(celsius) {
    console.log(`${celsius}°C converted to Fahrenheit is ${(celsius * 9 / 5) + 32}°F`);
}


//1st method: setInterval
let counter = 0;
setInterval(() => {
    if (counter <= 100) {
        celsiusToFahrenheit(counter);
    }
    counter++;
}, 1000);






//2nd method: setTimeout (recursive)
let counter1 = 0;
function loop() {
    if (counter1 <= 100) {
        celsiusToFahrenheit(counter1);
        counter1++;
        setTimeout(loop, 1000);
    }
}
loop();


