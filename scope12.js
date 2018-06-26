// javascript scopes
// javscript scopes - by default static / lexical scope
// Global Scope - accessible through out any code blocks
// Local Scope - accessible only inside the code block where its defined

// global
    //local
        //local
    //local

let name = "Jerome";

if(true)
{
    let name = 'Dennis';
    console.log(name);
}

console.log(name);



// prints Dennis Jerome
if (true) {
     name = 'Dennis';
    console.log(name);
}

console.log(name);

// prints Dennis Dennis