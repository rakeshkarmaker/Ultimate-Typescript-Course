"use strict";
let sales = 147570;
let course = 'Typescript';
let is_published = true;
//New type => any type
// can be assigned anything, as a best practice you shoud avoid using any type as much as possible
let level; //let level: any
level = 123;
level = '123';
function Render(document) {
}
//## 3.5 -Array 
//Array in JS=> each elements can e a different types in js
let numbers = [1, 2, 3];
let arr_num = [1, 2, 3]; // Compiler can auto guesss => let number: number[]
let arr_numExplicit = [3, 4, 5];
let arr_any = [];
// arr_any[0] = 1;
//## 3.6-Tuples
// 1, 'raj'
let user = [1, 'Raj']; // A fixed array on 2 element of different type. elements => nothing more or less
user.push(10); // A limitation of ts.
// let user2:[number,string] = [1,'Raj','ads'];// error
//## 3.7-Enumuration
//PascalCase
var SizeNum;
(function (SizeNum) {
    SizeNum[SizeNum["Small"] = 1] = "Small";
    SizeNum[SizeNum["Medium"] = 5] = "Medium";
    SizeNum[SizeNum["Large"] = 6] = "Large";
})(SizeNum || (SizeNum = {}));
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
console.log(SizeNum);
console.log(Size);
var ShritSizes;
(function (ShritSizes) {
    ShritSizes[ShritSizes["Small"] = 2] = "Small";
    ShritSizes[ShritSizes["Medium"] = 3] = "Medium";
    ShritSizes[ShritSizes["Large"] = 4] = "Large";
})(ShritSizes || (ShritSizes = {}));
let myShirtSize = ShritSizes.Large;
console.log(myShirtSize);
//## 3.8- Functions
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    // Function by default always returns undefined from functions 
    // retunrn undefined;
    // better to return 
    return income * 1.48;
}
console.log("Your total with tax is:", calculateTax(10000));
//## 3.8- Objects
let employee = {
    id: 1,
    name: "A",
    retire: (date) => {
        console.log(date);
    }
};
employee.name = "Rakesh";
console.log(employee);
