// name, age , location
// andrew is 27 and lives in Philadelphia
// Increase age by 1 and print message again

let user = {
    'name' : 'Andrew',
    'age': 27,
    'city': 'Philadelphia',
};

console.log(`${user.name} is ${user.age} and lives in ${user.city}`);

user.age += 1; 

console.log(`${user.name} is ${user.age} and lives in ${user.city}`);