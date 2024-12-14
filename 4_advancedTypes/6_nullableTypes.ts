

function greet(name:string|null|undefined){
    if(name)
        console.log("Hello ",name.toUpperCase());
    else
        console.log('Hola!');
        
}

// greet(null); //Argument of type 'null' is not assignable to parameter of type 'string'.ts(2345)

