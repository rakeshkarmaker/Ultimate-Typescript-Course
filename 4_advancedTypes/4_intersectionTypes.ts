


// Custom type 1
type Draggable ={
    drag: ()=> void
};

// Custom type 2
type Resizable ={
    resize: ()=> void
};

// By using Intersection type we have now an object that is both draggable and resizable
type UIwidget = Draggable & Resizable;


//Declaring a object

let textBox:UIwidget= {
    drag: ()=>{ console.log("It is dragable")},
    resize: ()=>{ console.log("It is Resizable")}
}