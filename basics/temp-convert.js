let fahrenheit = 100;

let celcius, kalvin;

console.log('Fahrenheit : %d ',fahrenheit);

//https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places/15762794
//T(°C) = (T(°F) - 32) × 5/9
celcius = +parseFloat((fahrenheit - 32) * (5/9),10).toFixed(2);
console.log('Celcius : %s ', celcius + String.fromCharCode(176) + ' C');
console.log(typeof celcius);

//T(K) = (T(°F) + 459.67)× 5/9
kalvin = +parseFloat((fahrenheit + 459.67) * (5 / 9), 10).toFixed(2);
console.log('Celcius : %s', kalvin +' K');
console.log(typeof kalvin);
