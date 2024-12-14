

let sales: number = 1_47_570;
let course: string = 'Typescript';
let is_published:boolean = true;


//New type => any type
// can be assigned anything, as a best practice you shoud avoid using any type as much as possible
let level;  //let level: any
level = 123;
level ='123';

function Render(document){

}

//## 3.5 -Array 



//Array in JS=> each elements can e a different types in js
let numbers =[1,2,3];
let arr_num =[1,2,3]; // Compiler can auto guesss => let number: number[]

let arr_numExplicit : number[]= [3,4,5];

let arr_any = [];

// arr_any[0] = 1;


//## 3.6-Tuples

// 1, 'raj'

let user:[number,string] = [1,'Raj']; // A fixed array on 2 element of different type. elements => nothing more or less

user.push(10); // A limitation of ts.

// let user2:[number,string] = [1,'Raj','ads'];// error

//## 3.7-Enumuration

//PascalCase
enum SizeNum {
    Small = 1,
    Medium = 5,
    Large
}
enum Size {
    Small = 's',
    Medium = 'm',
    Large = 'l'
}

console.log(SizeNum);
console.log(Size);

enum ShritSizes{ Small = 2, Medium,Large}
let myShirtSize: ShritSizes = ShritSizes.Large;
console.log(myShirtSize);



//## 3.8- Functions

function calculateTax(income:number):number{

    if(income<50_000) return income*1.2;
    // Function by default always returns undefined from functions 
    // retunrn undefined;

    // better to return 
    return income*1.48;
}

console.log("Your total with tax is:",calculateTax(10_000));



//## 3.8- Objects
let employee :{
    readonly id:number,
    name?: string, // make something optional
    retire: (date:Date)=> void
} = {
    id:1,
    name:"A",
    retire: (date:Date)=>{
        console.log(date);
        
    }
};

employee.name ="Rakesh";
console.log(employee);
