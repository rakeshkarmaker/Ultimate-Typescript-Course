


//2. Type Aliases

type Employee = {
    readonly id:number,
    name?: string, // make something optional
    retire: (date:Date)=> void
}


let employee1 = {
    id:1,
    name:"A",
    retire: (date:Date)=>{
        console.log(date);
        
    }
};

let employee2 = {
    id:2,
    name:"B",
    retire: (date:Date)=>{
        console.log(date);
        
    }
};