


type Customer = {
    birthday?: Date
}

function getCustomer (id: number) :Customer|null|undefined{
    return id ===0 ?null:{birthday:new Date()} // if id=0 return null, else return a Customer Object with his birthdate

}

let customer = getCustomer(0);
if(customer !==null && customer !==undefined) //'customer' is possibly 'null'.ts(18047) issue solved
    console.log(customer.birthday);

//Typescript alternative to do this in short!

// By using Optional property access operator
console.log(customer?.birthday); // ?. is called Optional property access operator.
//Optional property access operator lets the line execute only if it it not nullable or undefined

//## By using Optional property access operator  ?.
let customer2 = getCustomer(1);
console.log(customer2?.birthday?.getFullYear());



//Optional element Access operator
