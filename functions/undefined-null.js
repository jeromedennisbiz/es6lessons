let name;
let age = null;

if (name === undefined )
{
    console.log('Data Type : ' + typeof(name));
}
else
{
    console.log('name : ',name);
}

let square = function(num)
{
    console.log(num * num);
};



square(3);
console.log('Square : ' + square());
console.log('Age : ' + age);