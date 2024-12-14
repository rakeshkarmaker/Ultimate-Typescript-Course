"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() }; // if id=0 return null, else return a Customer Object with his birthdate
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined) //'customer' is possibly 'null'.ts(18047) issue solved
    console.log(customer.birthday);
//Typescript alternative to do this in short!
// By using Optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday); // ?. is called Optional property access operator.
//Optional property access operator lets the line execute only if it it not nullable or undefined
//## By using Optional property access operator  ?.
let customer2 = getCustomer(1);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//Optional element Access operator
