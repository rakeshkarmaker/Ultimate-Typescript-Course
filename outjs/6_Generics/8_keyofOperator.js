"use strict";
class Stores {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    // find(property:string,value:unknown): T|undefined{
    find(property, value) {
        //if T is product then keyof T =>returns  'name'|'price'
        return this._objects.find(obj => obj[property] === value);
    }
}
let store = new Stores();
store.add({ name: 'a', price: 100 });
store.find('name', 100);
store.find('price', 100);
// store.find('nonExistingProperty',100);
