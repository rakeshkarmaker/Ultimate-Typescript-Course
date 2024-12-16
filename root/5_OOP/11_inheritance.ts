

class Person{
    constructor(private firstName:string,private lastName:string){
    }
    get fullName(){
        return this.firstName+' '+this.lastName;
    }

    walk(){
        console.log("Can walk");
        
    }
}

//#11-Inheritance
class Student extends Person {
    constructor(private studentID:number,firstName:string,lastName:string){
        super(firstName,lastName);
    }
    takeTest(){
        console.log("Taking a Test");
    }
}
//#12-Method overriding
class Teacher extends Person {


    override get fullName(){
        return "Professor Dr."+super.fullName; //super.fullName Calls the method of parent class that returns full name 
    }

}

//#13- Polyporphism
function printNames(people:Person[]){
    for(let person of people){
        console.log(person.fullName);
        
    }
    
}

let student1 = new Student(1,'Jhon','Hawkings');
let teacher1 = new Teacher('Ron','Hawkings');
console.log(teacher1.fullName);
//#13- Polyporphism
let personArr: Person[] = [student1,
    teacher1,
    new Student(2,"Rahul","Ghosh")
]
printNames(personArr); 