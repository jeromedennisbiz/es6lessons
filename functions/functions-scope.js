// Global - convertFahrenheitToCelcius,convertFahrenheitToKalvin
// local scope - fahrenheit,celcius,kalvin

//https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places/15762794
//T(°C) = (T(°F) - 32) × 5/9
let convertFahrenheitToCelcius = function (fahrenheit) {
    celcius = +parseFloat((fahrenheit - 32) * (5 / 9), 10).toFixed(2);
    return celcius;
};

//T(K) = (T(°F) + 459.67)× 5/9
let convertFahrenheitToKalvin = function (fahrenheit) {
    kalvin = +parseFloat((fahrenheit + 459.67) * (5 / 9), 10).toFixed(2);
    return kalvin;
};

console.log('Celcius : %s ', convertFahrenheitToCelcius(100) + String.fromCharCode(176) + ' C');
console.log('Celcius : %s', convertFahrenheitToKalvin(100) + ' K');