let isGuestOneVegan = true;
let isGuestTwoVegan = true;

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
