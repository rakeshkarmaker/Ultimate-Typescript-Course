"use strict";
//constraining the T generic to accept only number or string values
function echo(value) {
    return value;
}
echo('1');
//Constraint by number and string
function echo2(value) {
    return value;
}
echo2(2);
echo2(2);
//Constraint by shape object
function echo3(value) {
    return value;
}
echo3({ name: 'a' });
function echo4(value) {
    return value;
}
echo4({ name: 'a' });
//Constraint by an Customer
class Person2 {
    constructor(name) {
        this.name = name;
    }
}
class Customer2 extends Person2 {
}
// function echo5<T extends Person2>(value:T):T{
function echo5(value) {
    return value;
}
echo5({ name: 'a' });
