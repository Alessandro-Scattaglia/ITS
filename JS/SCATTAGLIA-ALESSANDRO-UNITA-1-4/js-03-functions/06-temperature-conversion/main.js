function celsiusToFahrenheit (celsius)
{
    
    console.log(`${celsius}°C is ${(celsius * 9 / 5) + 32}°F`);

}

function fahrenheitToCelsius (fahrenheit)
{
    console.log(`${fahrenheit}°F is ${(fahrenheit - 32) * 5 / 9}°C`);
}



celsiusToFahrenheit(0);
fahrenheitToCelsius(32);

