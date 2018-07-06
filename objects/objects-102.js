
let temperature = {};


let tempConvert = function(tempToCovert)
{
    return temperature = {
        'fahrenheit': tempToCovert,
        'celcius': convertFahrenheitToCelcius(tempToCovert),
        'kalvin': convertFahrenheitToKalvin(tempToCovert),
    };        
    
};

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

let tempToPrint = tempConvert(100);

console.log(`Celcius ${tempToPrint.fahrenheit} ${String.fromCharCode(176)}F ` + `Celcius ${tempToPrint.celcius} ${String.fromCharCode(176)}C ` + `Celcius ${tempToPrint.kalvin} K` );

