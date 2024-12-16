


//

interface Products{
    name:string,
    price:number
}

type ReadOnly<T> = {
    //Index signature
    //Keyof
    //readonly [Property in keyof Products]: Products[Property];
   readonly [Property in keyof T]: T[Property];
}
type Optional<T> = {
   readonly [K in keyof T]?: T[K]; // T =>generic type, K => key property
}
type Nullabe<T> = {
   readonly [K in keyof T]?: T[K]|null; // T =>generic type, K => key property
}


let product: ReadOnly<Products>={
    name:'a',
    price:1
}