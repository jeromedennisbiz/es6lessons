let age = 38;
let isYouth = age < 40;
let temp = 35;
console.log('isYouth : ' , isYouth);

let isSummer = 'false';

console.log('is that summer  ? ', isSummer != false);

let name = [];

console.log('is your name Ramya  ? ', name != 'Ramya');

console.log(typeof name);

console.log('age < 18 : ', age < 18);

if(age < 18)
{
    console.log('You are an adolscent');
}
else if (age >= 18 && age <=35 ) {
    console.log('You are youth');
}
else{
    console.log('You are a senior');    
}

if (temp >= 35) {
    console.log('It\'s very hot outside. Please dont roam today under the scorthching sun today.');
} 
else if(temp > 30)
{
    console.log('It\'s hot outside' );
} 
else if (temp >= 25 && temp <= 30)
{
    console.log('It\'s fine day to roam, not so hot');
} 
else if (temp >= 20 && temp <= 25) {
    console.log('cool day, you must enjoy the weather outside');
} 
else if (temp < 20 ) {
    console.log('freezing...');
} 