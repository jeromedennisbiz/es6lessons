let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan === true && isGuestTwoVegan === true)
{
    console.log('Both are Vegan.');
}
else if (isGuestOneVegan === false && isGuestTwoVegan === false) 
{
    console.log('Serve anything in the menu.');
}
else if (isGuestOneVegan === false || isGuestTwoVegan === false) 
{
    console.log('Make sure to have some vegan food options ready.');
}

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Both are Vegan.');
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to have some vegan food options ready.');
}
else{
    console.log('Serve anything in the menu.');
}

if(false || false)
{
    console.log('anyone is true.');
}