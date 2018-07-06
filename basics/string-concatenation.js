let city = 'Los Angeles';
let country = 'United States';
let location = new String(city + ', ' + country);
console.log('location : ',location);
console.log(typeof city + ", " + typeof country + ", " + typeof location);
console.log(city.charAt(0) + ", " + country.charAt(0) + ", " + location.charAt(0));
console.log(city[0] + ", " + country[0] + ", " + location[0]);
if(city.localeCompare(country) > 0)
{
    console.log('City is greater than country.');
}
else if (country.localeCompare(city) > 0) {
}
console.log('country is greater than city.');

if(!('jerome'.localeCompare('jerome')))
{
    console.log('jerome is jerome');
}


if ('jerome'.localeCompare('Jerome') < 0) {
    console.log('jerome is not Jerome');
}