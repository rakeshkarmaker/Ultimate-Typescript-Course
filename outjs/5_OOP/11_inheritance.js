"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log("Can walk");
    }
}
//#11-Inheritance
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log("Taking a Test");
    }
}
//#12-Method overriding
class Teacher extends Person {
    get fullName() {
        return "Professor Dr." + super.fullName; //super.fullName Calls the method of parent class that returns full name 
    }
}
//#13- Polyporphism
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
let student1 = new Student(1, 'Jhon', 'Hawkings');
let teacher1 = new Teacher('Ron', 'Hawkings');
console.log(teacher1.fullName);
//#13- Polyporphism
let personArr = [student1,
    teacher1,
    new Student(2, "Rahul", "Ghosh")
];
printNames(personArr);
