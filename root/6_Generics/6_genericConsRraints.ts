

//constraining the T generic to accept only number or string values

function echo<T>(value:T):T{
    return value;
}
echo('1')


//Constraint by number and string
function echo2<T extends number|string>(value:T):T{
    return value;
}

echo2(2)
echo2(2)

//Constraint by shape object
function echo3<T extends {name:string}>(value:T):T{
    return value;
}
echo3({name:'a'});

//Constraint by an iterface

interface aPerson{
    name:string
}


function echo4<T extends aPerson>(value:T):T{
    return value;
}
echo4({name:'a'});

//Constraint by an Customer
class Person2{
    constructor(public name:string){}
}
class Customer2 extends Person2{}

// function echo5<T extends Person2>(value:T):T{
function echo5<T extends Customer2>(value:T):T{
    return value;
}
echo5({name:'a'});



