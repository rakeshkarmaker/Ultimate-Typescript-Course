"use strict";
function ren(document) {
    document.move();
    document.run();
    document.anythingUwish();
}
function render(document) {
    //Narrowing 
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    //custom obj
    if (document instanceof NewDoc) {
    }
    document.run();
    document.anythingUwish();
}
function reject(msg) {
}
function processEvents() {
    while (true) {
        //read a msg from queue.
    }
    processEvents();
    console.log("Hellow World");
}
reject('...');
